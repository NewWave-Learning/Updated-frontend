// [TAG: RemedialLessonsPage v1.0]
import React from 'react';

function RemedialLessonsPage() {
  const lessons = [
    { title: "Phonics Basics", link: "/lesson/phonics" },
    { title: "Decoding Practice", link: "/lesson/decoding" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Recommended Remedial Lessons</h1>
      {lessons.map((lesson, idx) => (
        <a href={lesson.link} key={idx} className="block mb-4 text-blue-600 underline">{lesson.title}</a>
      ))}
    </div>
  );
}

export default RemedialLessonsPage;
