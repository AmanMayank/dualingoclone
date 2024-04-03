"use client";

import { courses } from "@/db/schema";
import { Card } from "./card";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId: number;
};

export const List = ({ courses, activeCourseId }: Props) => {
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={courses.id}
          id={courses.id}
          title={courses.title}
          imageSrc={course.imageSrc}
          onClick={() => {}}
          disabled={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
