import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import React from "react";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>LearnPage</StickyWrapper>
      <FeedWrapper>Feed</FeedWrapper>
    </div>
  );
};

export default LearnPage;
