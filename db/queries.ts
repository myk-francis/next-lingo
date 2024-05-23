import { cache } from "react";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs";

import db from "@/db/drizzle";
import { userProgress, courses, units } from "./schema";

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();

  return data;
});

export const getUserProgress = cache(async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  });

  return data;
});

export const getCourseById = cache(async (courseId: number) => {
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
    // with: {
    //   units: {
    //     orderBy: (units, { asc }) => [asc(units.order)],
    //     with: {
    //       lessons: {
    //         orderBy: (lessons, { asc }) => [asc(lessons.order)],
    //       },
    //     },
    //   },
    // },
  });

  return data;
});
