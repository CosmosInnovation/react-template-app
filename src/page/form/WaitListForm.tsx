import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Input from '../../component/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';

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

interface WaitListFormData {
  firstName: string;
}

const waitListSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
})

const WaitListForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const question = questions[step];
  // const data = new Map()

  const handleContinue = () => {
    setStep(prev => prev + 1);
  };

  const submitForm = (values: WaitListFormData) => {
    console.log(values)
  }


  return (

    <div className="min-h-screen flex items-center justify-center">
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
            <Formik
              initialValues={{ firstName: '', password: '' }}
              validationSchema={waitListSchema}
              onSubmit={submitForm}
              validateOnBlur={true}
              validateOnChange={true}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <form onSubmit={handleSubmit} className="">
                  {question.type === "text" ? (
                    <>
                      <div className='shadow-md p-8 justify-center flex'>
                        <Input
                          id={question.label}
                          name={question.label}
                          type="text"
                          label={question.label}
                          onBlur={handleBlur('firstName')}
                          value={values.firstName}
                          error={errors.firstName && touched.firstName ? errors.firstName : ''}
                          onChange={handleChange('firstName')}
                        />
                      </div>
                    </>
                  ) : (
                    <div className='block'>
                      <label htmlFor={question.label} className="block text-lg font-bold text-gray-700 mb-2">
                        {question.label}
                      </label>
                      {question.options.map(option => (
                        <div className="block" key={option}>
                          <input type="radio" name={question.label} value={option} className="mr-2" />
                          {option}
                        </div>

                      ))}
                    </div>
                  )}
                  {step < questions.length - 1 && (
                    <button onClick={handleContinue} className="bg-blue-500 text-white p-2 rounded float-right mt-4">
                      Continue
                    </button>
                  )}
                </form>
              )}
            </Formik>

          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </div >
  );
};

export default WaitListForm;
