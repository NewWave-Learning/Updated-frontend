// [TAG: DiagnosticResultPage v1.0]
import React from 'react';

function DiagnosticResultPage() {
  const strengths = ["Comprehension", "Vocabulary"];
  const gaps = ["Phonics", "Decoding"];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Your Diagnostic Results</h1>
      <div className="mb-4">
        <h2 className="text-green-600 text-xl font-semibold">Strengths:</h2>
        <ul className="list-disc list-inside">
          {strengths.map((s, idx) => (<li key={idx}>{s}</li>))}
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-red-600 text-xl font-semibold">Gaps Identified:</h2>
        <ul className="list-disc list-inside">
          {gaps.map((g, idx) => (<li key={idx}>{g}</li>))}
        </ul>
      </div>
      <a href="/remedial-lessons" className="bg-green-500 text-white px-6 py-2 rounded">View Remedial Lessons</a>
    </div>
  );
}

export default DiagnosticResultPage;
