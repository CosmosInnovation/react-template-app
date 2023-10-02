import { FC } from "react";
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import Input from "../../component/Input";
import { Formik } from "formik";
import { setAuth } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { LoginFormData } from "../../interface/formData";
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../component/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LoginPageProps { }

const validateLoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(4, 'Password too short').required('Password is required')
})

export const LoginPage: FC<LoginPageProps> = () => {
  // const { loading, auth, error } = useSelector(auth => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = (values: LoginFormData) => {
    console.log(values)
    dispatch(setAuth(values));
    toast.success('Login successful!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate('/dashboard');
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
    // Center the content
    <div className="flex items-center justify-center h-screen m-0 p-0">
      {/* <ToastContainer position="top-right" /> */}

      <motion.div
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .6 }}
      >
        <div className="flex-wrap  w-[100%] flex-col inline-flex 2xl:w-[600px] bg-white p-4">
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

              <form onSubmit={handleSubmit} className="flex flex-col flex-wrap justify-center items-center sm:w-full gap-2">
                {/* Logo or Title */}
                <div className="text-center mb-5">
                  <h1 className="text-[32px] font-bold text-black">Login</h1>
                </div>
                <Input
                  id="email"
                  label='Email'
                  type="text"
                  // placeholder="Email"
                  onBlur={handleBlur('email')}
                  value={values.email}
                  error={errors.email && touched.email ? errors.email : ''}
                  onChange={handleChange('email')}
                />
                <Input
                  id="password"
                  label='Password'
                  type="password"
                  // placeholder="Password"
                  onBlur={handleBlur('password')}
                  value={values.password}
                  error={errors.password && touched.password ? errors.password : ''}
                  onChange={handleChange('password')}
                />

                <div className='py-4 flex w-[100%]'>
                  <Button type='submit' title='Login' />
                </div>
                <div>If you don't have an account, please register <Link to={'/register'} className='text-blue-500'>here6</Link></div>
              </form>
            )
            }
          </Formik>
        </div>
      </motion.div>
    </div>
  )
}
