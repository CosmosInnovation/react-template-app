import { FC } from "react";
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { Formik } from "formik";
import Input from "../../component/Input";
import { SignUpFormData } from "../../interface/formData";
import { Link } from 'react-router-dom';
import Button from '../../component/Button';

interface SignUpProps { }

const validateSignUpSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(4, 'Password too short').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Confirm Password is required')
})

export const SignUp: FC<SignUpProps> = () => {
  
  const submitForm = (values: SignUpFormData) => {
    console.log(values)
  }

  return (
    <div className="flex items-center justify-center h-screen min:sm:mt-20">

      <motion.div
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{ duration: .6 }}>
        <div className="flex-wrap  w-full flex-col flex 2xl:w-[600px] bg-white px-4 py-20">
          {/* SignUp Form */}
          <Formik
            initialValues={{
              firstName: '', lastName: '', email: '', password: '', confirmPassword: ''
            }}
            validationSchema={validateSignUpSchema}
            onSubmit={submitForm}
            validateOnBlur={true}
            validateOnChange={true}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col flex-wrap justify-center items-center">

                {/* Logo or Title */}
                <div className="text-center mb-5">
                  <h1 className="text-[32px] font-bold text-indigo-950">Sign Up</h1>
                </div>

                <Input
                  id="firstName"
                  type="text"
                  label="First Name"
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                  error={errors.firstName && touched.firstName ? errors.firstName : ''}
                  onChange={handleChange('firstName')}
                />

                <Input
                  id="lastName"
                  type="text"
                  label="Last Name"
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                  error={errors.lastName && touched.lastName ? errors.lastName : ''}
                  onChange={handleChange('lastName')}
                />

                <Input
                  id="email"
                  type="text"
                  label="Email"
                  onBlur={handleBlur('email')}
                  value={values.email}
                  error={errors.email && touched.email ? errors.email : ''}
                  onChange={handleChange('email')}
                />

                <Input
                  id="password"
                  type="password"
                  label="Password"
                  onBlur={handleBlur('password')}
                  value={values.password}
                  error={errors.password && touched.password ? errors.password : ''}
                  onChange={handleChange('password')}
                />

                <Input
                  id="confirmPassword"
                  type="text"
                  label="Confirm Password"
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  error={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : ''}
                  onChange={handleChange('confirmPassword')}
                />

                <div className='py-4 flex w-[100%]'>
                  <Button type='submit' title='Sign Up' />
                </div>
                {/* When this increases, add a component to reflect it */}
                <div>If you have account please <Link to={'/login'} className='text-blue-500'>login here.</Link></div>
              </form>

            )}
          </Formik>
        </div>
      </motion.div>
    </div>
  )
}
