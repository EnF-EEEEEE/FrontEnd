"use client";

import { ReactionId } from "@/constants/letter";
import LetterDisplay from "./LetterDisplay";

interface MenteeLetterViewProps {
  outgoingLetter: any;
  incomingLetter: any;
  reactionId: ReactionId | null;
}

export default function MenteeLetterView({
  outgoingLetter,
  incomingLetter,
  reactionId,
}: MenteeLetterViewProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        {incomingLetter && (
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
            reactionId={reactionId}
            userRole="MENTEE"
          />
        )}

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
          userRole="MENTEE"
        />
      </div>
    </>
  );
}
