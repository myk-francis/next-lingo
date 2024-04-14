import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import React from "react";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";

const LearnPage = () => {
  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
      <StickyWrapper>
        <UserProgress
          activeCourse={{}}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
    </div>
  );
};

export default LearnPage;
