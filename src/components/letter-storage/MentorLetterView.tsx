"use client";

import { ReactionId } from "@/constants/letter";
import ReplyButtonDiv from "./ReplyButtonDiv";
import LetterDisplay from "./LetterDisplay";

interface MentorLetterViewProps {
  outgoingLetter: any;
  incomingLetter: any;
  reactionId: ReactionId | null;
}

export default function MentorLetterView({
  outgoingLetter,
  incomingLetter,
  reactionId,
}: MentorLetterViewProps) {
  console.log("incomingLetter", incomingLetter);
  console.log("reactionId", reactionId);

  return (
    <>
      <div className="flex flex-col gap-2">
        {!outgoingLetter && (
          <div className="p-[14px] text-center gap-[8px] border border-blue01 bg-[#F0FDFF] rounded-[14px]">
            {/* <p className="text-gray06 text-Body2_B_14 mb-2">
            답장 시간이 D일 hh시간 남았어요
          </p> */}
            <p className="text-Body1_R_16">
              후배버디가 답장을 기다리고 있어요.
            </p>
          </div>
        )}

        <LetterDisplay
          type="REPLY"
          categoryName={incomingLetter.categoryName}
          authorName={incomingLetter.replyUser}
          authorBirdType={incomingLetter.replyUserBird}
          recipientName={incomingLetter.sendUser}
          recipientBirdType={incomingLetter.sendUserBird}
          title={incomingLetter.letterTitle}
          content={incomingLetter.letter}
          letterDate={incomingLetter.creatAt}
          letterSeq={incomingLetter.letterStatusSeq}
          reactionId={reactionId}
          userRole={"MENTOR"}
        />

        {outgoingLetter && (
          <LetterDisplay
            type="OUTGOING"
            categoryName={outgoingLetter.categoryName}
            authorName={outgoingLetter.replyUser}
            authorBirdType={outgoingLetter.replyUserBird}
            recipientName={outgoingLetter.sendUser}
            recipientBirdType={outgoingLetter.sendUserBird}
            title={outgoingLetter.letterTitle}
            content={outgoingLetter.letter}
            letterDate={outgoingLetter.creatAt}
            reactionId={reactionId}
            userRole={"MENTEE"}
          />
        )}
      </div>

      {!outgoingLetter && (
        <ReplyButtonDiv
          recipientName={incomingLetter.replyUserBird}
          myBirdType={incomingLetter.sendUser}
          categoryName={incomingLetter.categoryName}
          letterStatusSeq={incomingLetter.letterStatusSeq}
        />
      )}
    </>
  );
}
