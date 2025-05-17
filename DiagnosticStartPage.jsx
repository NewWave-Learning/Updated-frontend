// [TAG: DiagnosticStartPage v1.0]
import React from 'react';
import { useNavigate } from 'react-router-dom';

function DiagnosticStartPage() {
  const navigate = useNavigate();

  const startDiagnostic = (subject) => {
    navigate(`/diagnostic/${subject}`);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-6">Start a Diagnostic</h1>
      <button onClick={() => startDiagnostic('reading')} className="bg-blue-500 text-white px-6 py-2 rounded m-2">Reading Diagnostic</button>
      <button onClick={() => startDiagnostic('math')} className="bg-green-500 text-white px-6 py-2 rounded m-2">Math Diagnostic</button>
    </div>
  );
}

export default DiagnosticStartPage;
