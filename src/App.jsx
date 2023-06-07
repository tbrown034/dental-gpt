import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/solid";

function App() {
  const [question, setQuestion] = useState("");
  const [showQuestion, setShowQuestion] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowQuestion(true);
    setShowForm(false);
  };

  const handleReset = () => {
    setQuestion("");
    setShowQuestion(false);
    setShowForm(true);
  };

  return (
    <section className="bg-indigo-600 text-white flex flex-col justify-center items-center min-h-screen gap-8">
      <h1 className="text-6xl">Dental GPT</h1>
      {showForm && (
        <div className="border-2 border-green-50 p-10 w-full max-w-xl mx-auto">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label htmlFor="myInput" className="text-2xl">
              Enter Your Question:
            </label>
            <textarea
              id="myInput"
              className="w-full h-auto text-lg px-2 text-black"
              placeholder="Enter your question"
              required
              rows="6"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center"
            >
              Submit <PaperAirplaneIcon className="h-5 w-5 ml-2 rotate-90" />
            </button>
          </form>
        </div>
      )}

      {showQuestion && (
        <div className="flex flex-col gap-4">
          <p className="text-2xl">
            You asked: <span className="text-yellow-300">{question}</span>
          </p>
          <p className="text-2xl">
            Dental GPT says: <span className="text-yellow-300"></span>
          </p>
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center"
            onClick={handleReset}
          >
            Ask Another Question
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
