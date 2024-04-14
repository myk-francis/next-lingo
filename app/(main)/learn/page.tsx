import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import React from "react";

const LearnPage = () => {
  return (
    <div className="flex gap-[48px] px-6">
      <FeedWrapper>Feed</FeedWrapper>
      <StickyWrapper>LearnPage</StickyWrapper>
    </div>
  );
};

export default LearnPage;
