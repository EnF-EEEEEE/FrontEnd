import {
  Direction,
  OptionValue,
  questions,
} from "@/constants/birdyTestQuestions";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Answer = OptionValue | null; // ✅ 0: 아니다, 1: 보통이다, 2: 그렇다, null: 답변 안 한 상태

interface BirdyTestState {
  answers: Answer[];
  lifeScore: number;
  lifestyleScore: number;
  birdType: string | null;
  setAnswer: (index: number, answer: Answer) => void;
  calculateResults: () => void;
  resetTest: () => void;
}

export const useBirdyTestStore = create<BirdyTestState>()(
  persist(
    (set, get) => ({
      answers: Array(12).fill(null),
      lifeScore: 0,
      lifestyleScore: 0,
      birdType: null,

      setAnswer: (index, answer) =>
        set((state) => {
          const updated = [...state.answers];
          updated[index] = answer;
          return { answers: updated };
        }),

      calculateResults: () => {
        const answers = get().answers;
        const lifeScore = calculateScore(answers, "life");
        const lifestyleScore = calculateScore(answers, "lifestyle");
        const birdType = matchBirdType(lifeScore, lifestyleScore)?.name || null;

        set({ lifeScore, lifestyleScore, birdType });
      },

      resetTest: () =>
        set({
          answers: Array(12).fill(null),
          lifeScore: 0,
          lifestyleScore: 0,
          birdType: null,
        }),
    }),
    {
      name: "birdytest-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

/** ✅ 특정 방향(life/lifestyle)의 점수 계산 */
const calculateScore = (answers: Answer[], direction: Direction): number => {
  return answers.reduce((sum: number, answer, index) => {
    const isTargetDirection = questions[index].direction === direction;
    return isTargetDirection && answer !== null
      ? sum + (answer as number)
      : sum;
  }, 0);
};

/** ✅ 새 유형 매칭 */
const birdTypes = [
  {
    name: "앵무새",
    lifeMin: 10,
    lifeMax: 12,
    lifestyleMin: 7,
    lifestyleMax: 12,
  },
  {
    name: "올빼미",
    lifeMin: 10,
    lifeMax: 12,
    lifestyleMin: 0,
    lifestyleMax: 6,
  },
  { name: "뱁새", lifeMin: 7, lifeMax: 9, lifestyleMin: 0, lifestyleMax: 6 },
  {
    name: "카나리아",
    lifeMin: 4,
    lifeMax: 6,
    lifestyleMin: 7,
    lifestyleMax: 12,
  },
  { name: "벌새", lifeMin: 0, lifeMax: 3, lifestyleMin: 7, lifestyleMax: 12 },
  { name: "파랑새", lifeMin: 0, lifeMax: 3, lifestyleMin: 0, lifestyleMax: 6 },
];

const matchBirdType = (lifeScore: number, lifestyleScore: number) => {
  return (
    birdTypes.find(
      (bird) =>
        lifeScore >= bird.lifeMin &&
        lifeScore <= bird.lifeMax &&
        lifestyleScore >= bird.lifestyleMin &&
        lifestyleScore <= bird.lifestyleMax
    ) || birdTypes[0]
  );
};
