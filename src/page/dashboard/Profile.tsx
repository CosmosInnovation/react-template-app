import { Formik } from 'formik';
import { FC } from "react";
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { ProfileFormData } from '../../interface/formData';
import Input from '../../component/Input';

interface ProfileProps { }

const validateProfileSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  currentPassword: Yup.string().min(4, 'Current Password too short').required('Current Password is required'),
  newPassword: Yup.string().min(4, 'New Password too short').required('New Password is required'),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), ''], 'Passwords must match')
    .required('Confirm Password is required')
})

export const Profile: FC<ProfileProps> = () => {
  // const dispatch = useDispatch();

  const submitForm = (values: ProfileFormData) => {
    console.log(values);
    // dispatch(updateProfile(values))
  }

  const submitPasswordChange = (values: ProfileFormData) => {
    console.log(values);
    // dispatch(updateProfile(values))
  }

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="flex flex-col h-20 text-center" />
      <div className="flex-wrap 
        w-[100%] 
        h-[100%] 
        flex-col 
        justify-center 
        items-center 
        gap-[60px] 
        inline-flex 
        2xl:w-[900px]
        m-auto
        p-10  bg-white
      ">
        {/* <div className="flex flex-col gap-4 p-10  bg-white"> */}
        <span className="text-black text-xl font-weight-800">Profile Setting</span>
        <div className="flex-wrap  w-[100%] flex-col m-auto">

          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              currentPassword: '',
              newPassword: '',
              confirmNewPassword: '',
            }}
            validationSchema={validateProfileSchema}
            onSubmit={submitForm}
            validateOnBlur={true}
            validateOnChange={true}
          >

            {/* Show form here */}
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

              <form onSubmit={handleSubmit} className="flex flex-col flex-wrap justify-center items-center w-[100%] gap-4">
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
                <button className="w-[400px] py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-medium" type="submit">
                  Save Updates
                </button>
              </form>
            )
            }
          </Formik>

          <div className='flex h-[0.4px] bg-black mb-10 mt-10 hr' />
          <div className='mb-10'>
            <span className="text-black text-xl font-weight-800 ">Change Password</span>
          </div>

          <Formik
            initialValues={{
              currentPassword: '',
              newPassword: '',
              confirmNewPassword: '',
            }}
            validationSchema={validateProfileSchema}
            onSubmit={submitPasswordChange}
            validateOnBlur={true}
            validateOnChange={true}
          >
            {/* Show form here */}
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <form onSubmit={handleSubmit} className="flex flex-col flex-wrap justify-center items-center w-[100%] gap-4">
                <Input
                  id="currentPassword"
                  type="currentPassword"
                  placeholder="Current Password"
                  onBlur={handleBlur('currentPassword')}
                  value={values.currentPassword}
                  error={errors.currentPassword && touched.currentPassword ? errors.currentPassword : ''}
                  onChange={handleChange('currentPassword')}
                />

                <Input
                  id="currentPassword"
                  type="newPassword"
                  placeholder="New Password"
                  onBlur={handleBlur('newPassword')}
                  value={values.newPassword}
                  error={errors.newPassword && touched.currentPassword ? errors.newPassword : ''}
                  onChange={handleChange('currentPassword')}
                />

                <Input
                  id="confirmNewPassword"
                  type="confirmNewPassword"
                  placeholder="Confirm New Password"
                  onBlur={handleBlur('confirmNewPassword')}
                  value={values.confirmNewPassword}
                  error={errors.confirmNewPassword && touched.confirmNewPassword ? errors.confirmNewPassword : ''}
                  onChange={handleChange('confirmNewPassword')}
                />

                <button className="w-[400px] flex-wrap py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-medium" type="submit">
                  Save Password Change
                </button>
              </form>
            )
            }
          </Formik>
        </div>

      </div>
      <div className="flex flex-col h-20" />
    </div>)
}