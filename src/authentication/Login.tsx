import { FC } from "react";
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import Input from "../component/Input";
import { Formik } from "formik";
import { setAuth } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import { LoginFormData } from "../interface/formData";

interface LoginPageProps { }

const validateLoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(4, 'Password too short').required('Password is required')
})

export const LoginPage: FC<LoginPageProps> = () => {
  // const { loading, auth, error } = useSelector(auth => state.auth)
  const dispatch = useDispatch();

  const submitForm = (values: LoginFormData) => {
    console.log(values)
    dispatch(setAuth(values));
  }
  // if (error) {
  //   Alert.alert('Error', `${error}`,
  //     [
  //       {
  //         text: 'OK',
  //         onPress: () => dispatch(resetError())
  //       }
  //     ],
  //     { cancelable: true }
  //   );
  // }
  //

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: .6 }}
    >
      <div className="flex mt-20">
        <div className="flex flex-col h-20" />
        <div className="flex-wrap  w-[100%] flex-col gap-[40px] inline-flex 2xl:w-[600px] m-auto">

          {/* Logo or Title */}
          <div className="text-center mb-5">
            <h1 className="text-[46px] font-bold text-indigo-950">Login</h1>
          </div>

          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validateLoginSchema}
            onSubmit={submitForm}
            validateOnBlur={true}
            validateOnChange={true}
          >
            {/* Login Form */}
            {/* Show form here */}
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

              <form onSubmit={handleSubmit} className="flex flex-col flex-wrap justify-center items-center sm:w-full w-[300px] bg-white p-10 rounded-lg shadow-md gap-8">

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

                <button className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-bold" type="submit">
                  Login
                </button>
              </form>
            )
            }
          </Formik>
        </div>
      </div>
    </motion.div >
  )
}
