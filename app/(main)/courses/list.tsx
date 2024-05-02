"use client";

import { courses } from "@/db/schema";
import React from "react";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId: number;
};

export const List = ({ courses, activeCourseId }: Props) => {
  return <div>List</div>;
};
