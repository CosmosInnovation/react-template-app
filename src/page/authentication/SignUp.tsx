import { FC } from "react";
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { Formik } from "formik";
import Input from "../../component/Input";
import { SignUpFormData } from "../../interface/formData";

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
    <motion.div
      initial={{ y: "-100vh", opacity: 0 }}
      animate={{ y: 1, opacity: 1 }}
      transition={{ duration: .6 }}>
      <div className="flex mt-20">
        <div className="flex flex-col h-20" />

        <div className="flex-wrap w-[100%]  flex-col gap-[40px] inline-flex 2xl:w-[600px] m-auto">

          {/* Logo or Title */}
          <div className="text-center mb-5">
            <h1 className="text-[46px] font-bold text-indigo-950">Sign Up</h1>
          </div>

          {/* SignUp Form */}
          <Formik
            initialValues={{
              firstName: '', lastName:'', email: '', password: '', confirmPassword: ''
            }}
            validationSchema={validateSignUpSchema}
            onSubmit={submitForm}
            validateOnBlur={true}
            validateOnChange={true}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col flex-wrap justify-center items-center sm:w-full w-[300px] bg-white p-10 rounded-lg shadow-md gap-8">
                
                <Input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                  error={errors.firstName && touched.firstName ? errors.firstName : ''}
                  onChange={handleChange('firstName')}
                />

                <Input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                  error={errors.lastName && touched.lastName ? errors.lastName : ''}
                  onChange={handleChange('lastName')}
                />

                <Input
                  id="email"
                  type="text"
                  placeholder="Email"
                  onBlur={handleBlur('email')}
                  value={values.email}
                  error={errors.email && touched.email ? errors.email : ''}
                  onChange={handleChange('email')}
                />

                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  onBlur={handleBlur('password')}
                  value={values.password}
                  error={errors.password && touched.password ? errors.password : ''}
                  onChange={handleChange('password')}
                />

                <Input
                  id="confirmPassword"
                  type="text"
                  placeholder="Confirm Password"
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  error={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : ''}
                  onChange={handleChange('confirmPassword')}
                />

            <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-bold" type="submit">
              Sign Up
            </button>
          </form>
              
            )}
          </Formik>
        </div>

      </div>

    </motion.div>
  )
}
