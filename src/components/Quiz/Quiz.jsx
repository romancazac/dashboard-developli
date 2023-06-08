import React, { useState } from 'react';
import { Radio } from "@material-tailwind/react";
import { CheckIcon } from '@heroicons/react/20/solid';

export const Quiz = ({ questions }) => {
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [score, setScore] = useState(0);
   const [showScore, setShowScore] = useState(false);
   const [selectedAnswer, setSelectedAnswer] = useState('');

   const handleAnswerClick = () => {
      const currentQuestionObj = questions[currentQuestion];

      const isCorrect = currentQuestionObj.raspunsuri.every((raspuns) => {
         return (
            (selectedAnswer.includes(raspuns.text) && raspuns.corect) ||
            (!selectedAnswer.includes(raspuns.text) && !raspuns.corect)
         );
      });

      if (isCorrect) {
         setScore(score + 1);
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
         setCurrentQuestion(nextQuestion);
         setSelectedAnswer('');
      } else {
         setShowScore(true);
      }
   };

   const handlePreviousQuestion = () => {
      const previousQuestion = currentQuestion - 1;
      if (previousQuestion >= 0) {
         setCurrentQuestion(previousQuestion);
         setSelectedAnswer('');
      }
   };

   const handleSkipQuestion = () => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
         setCurrentQuestion(nextQuestion);
         setSelectedAnswer('');
      } else {
         setShowScore(true);
      }
   };

   return (
      <>
         {showScore ? (
            <div className="mb-10">

               You scored {score} out of {questions.length} questions!
            </div>
         ) : (
            <>
               <div className="mb-9">
                  <div className="mb-5">
                     Question {currentQuestion + 1}/{questions.length}
                  </div>
                  <p className="text-blackColor font-bold">
                     {questions[currentQuestion].intrebare}
                  </p>
                  <span>Choose one or two answers</span>
               </div>
               <div className="mb-10">
                  {questions[currentQuestion].raspunsuri.map((raspuns, i) => (
                     <div className="bg-[#F9F9F9] rounded-lg mb-4" key={i}>
                        <Radio
                           id={raspuns.text}
                           name="answer"
                           color="teal"
                           value={raspuns.text}
                           label={raspuns.text}
                           className='rounded-none text-green'
                           icon={<CheckIcon className='w-4' />}
                           checked={selectedAnswer === raspuns.text}
                           onChange={(e) => setSelectedAnswer(e.target.value)}
                        />
                     </div>
                  ))}
               </div>
               <div className="flex justify-between">
                  <div className="flex gap-2">
                     <button
                        className="btn-block btn-block_gray"
                        onClick={handlePreviousQuestion}
                        disabled={currentQuestion === 0}
                     >
                        Previous
                     </button>

                     <button
                        className="btn-block btn-block_green"
                        onClick={handleAnswerClick}
                     >
                        Next
                     </button>
                  </div>
                  <button className="btn-block btn-block_gray" onClick={handleSkipQuestion}>
                     Skip
                  </button>

               </div>
            </>
         )}
      </>
   );
};
