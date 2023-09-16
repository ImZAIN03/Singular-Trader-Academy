/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Questions = () => {
  const [showAnswers, setShowAnswers] = useState([]);

  const toggleAnswer = (index) => {
    const newShowAnswers = [...showAnswers];
    newShowAnswers[index] = !newShowAnswers[index];
    setShowAnswers(newShowAnswers);
  };

  return (
    <div className="flex flex-col items-center justify-center my-[100px] ">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>

      <div className=" m-2 faq-container">

        <div className="text-left rounded-lg border border-gray-200 border-1 my-4 px-5 py-2 bg-green-100 question-section">
          <div className="question-box" onClick={() => toggleAnswer(0)}>
            <h2 className="text-xl font-sans mb-4">Will I be able to earn money immediately after completing the course?</h2>
            <div className={`answer ${showAnswers[0] ? 'block' : 'hidden'}`}>
              <p>
                There is no guarantee that you will start earning money immediately after completing the course. The success of trading depends on <br />
                many factors, including your experience, market understanding, the right strategy selection, and risk management abilities. Gaining <br />
                knowledge and skills is important, but consistent earnings may take time and effort. The average trader who starts trading typically takes <br />
                about 7 years to consistently earn money. While technical analysis can be mastered within a few to several months, developing emotional <br />
                intelligence and a proper mindset can take years. Those who can acknowledge their mistakes and critically evaluate their results have <br />
                a better chance of making profits than those who resist change.
              </p>
            </div>
          </div>
        </div>

        <div className="text-left rounded-lg border border-gray-200 border-1 my-4 px-5 py-2 bg-green-100 question-section">
          <div className="question-box" onClick={() => toggleAnswer(1)}>
            <h2 className="text-xl font-sans mb-4">Do you cover when to enter into trades in your course?</h2>
            <div className={`answer ${showAnswers[1] ? 'block' : 'hidden'}`}>
              <p>
                Yes, we precisely indicate where the market gives a signal and the necessary quantity to enter, we also demonstrate how to manage <br />
                positions that are in profit.
              </p>
            </div>
          </div>
        </div>

        <div className="text-left rounded-lg border border-gray-200 border-1 my-4 px-5 py-2 bg-green-100 question-section">
          <div className="question-box" onClick={() => toggleAnswer(2)}>
            <h2 className="text-xl font-sans mb-4">What is the length of the course?</h2>
            <div className={`answer ${showAnswers[2] ? 'block' : 'hidden'}`}>
              <p>
                The course lasts a few hours, but we recommend reviewing it multiple times to solidify the information.
              </p>
            </div>
          </div>
        </div>

        <div className="text-left rounded-lg border border-gray-200 border-1 my-4 px-5 py-2 bg-green-100 question-section">
          <div className="question-box" onClick={() => toggleAnswer(3)}>
            <h2 className="text-xl font-sans mb-4">Will this course help me with crypto and forex trading?</h2>
            <div className={`answer ${showAnswers[3] ? 'block' : 'hidden'}`}>
              <p>
                Each market and product has a unique way of behaving, but the fundamental and technical aspects of these products often look similar <br />
                or even identical. This course will be of help in all market conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
