import { cache } from "react";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs";

import db from "@/db/drizzle";

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();

  return data;
});
