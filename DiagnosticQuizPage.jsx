// [TAG: DiagnosticQuizPage v1.0]
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function DiagnosticQuizPage() {
  const { subject } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    axios.get(`/diagnostics/start/student1/${subject}`)
      .then(res => setQuestions(res.data.questions))
      .catch(err => console.error(err));
  }, [subject]);

  const handleAnswer = (index, answer) => {
    setAnswers({ ...answers, [index]: answer });
  };

  const submitQuiz = () => {
    axios.post(`/diagnostics/submit/student1`, { answers, subject })
      .then(() => navigate('/diagnostic/results'))
      .catch(err => console.error(err));
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4">{subject.toUpperCase()} Diagnostic</h2>
      {questions.map((q, idx) => (
        <div key={idx} className="mb-6">
          <p className="font-semibold mb-2">{q.question}</p>
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(idx, opt)}
              className={`px-4 py-2 m-1 rounded ${answers[idx] === opt ? 'bg-blue-400 text-white' : 'bg-gray-200'}`}
            >
              {opt}
            </button>
          ))}
        </div>
      ))}
      <button onClick={submitQuiz} className="bg-purple-500 text-white px-6 py-2 rounded">Submit Diagnostic</button>
    </div>
  );
}

export default DiagnosticQuizPage;
