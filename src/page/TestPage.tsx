import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

interface Question {
  label: string;
  options: string[];
  type: "radio" | "text";
}

const questions: Question[] = [
  {
    label: "Full Name",
    options: [],
    type: "text"
  },
  {
    label: "Email Address",
    options: [],
    type: "text"
  },
  {
    label: "How did you hear about us?",
    options: ["Friend or Family", "Social Media", "Advertisement", "Other (please specify)"],
    type: "radio"
  },
  // ... Add other questions here following the same format
];

const TestPage: React.FC = () => {
  const [step, setStep] = useState(0);
  const question = questions[step];

  const handleContinue = () => {
    setStep(prev => prev + 1);

  };

  return (

    <div className="min-h-screen flex items-center justify-center ">
      <LayoutGroup>
        <AnimatePresence>
          <motion.div
            layoutId="questionLayout"
            key={step}
            initial={{ opacity: 0, y: 50, rotateY: -90 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            exit={{ opacity: 0, y: -50, rotateY: 90 }}
            transition={{ duration: 0.5 }}
            style={{
              transformStyle: 'preserve-3d',
              transformOrigin: 'center',
              // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            className="bg-white p-8 w-full m-10 lg:w-[50%]"
          >
            {question.type === "text" ? (
              <>
                <div className='shadow-md p-8'>
                  <label htmlFor={question.label} className="block text-sm font-medium text-gray-700 mb-2">
                    {question.label}
                  </label>
                  <input type="text" id={question.label} name={question.label} className="border p-2 rounded w-full mb-n" />
                </div>
              </>
            ) : (
              <>
                <label htmlFor={question.label} className="block text-sm font-medium text-gray-700 mb-2">
                  {question.label}
                </label>

                {question.options.map(option => (

                  <label className="block" key={option}>
                    <input type="radio" name={question.label} value={option} className="mr-2" />
                    {option}
                  </label>

                ))}
              </>
            )}
            {step < questions.length - 1 && (
              <button onClick={handleContinue} className="bg-blue-500 text-white p-2 rounded float-right mt-4">
                Continue
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </div >
  );
};

export default TestPage;
