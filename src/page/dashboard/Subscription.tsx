import { Formik } from 'formik';
import { FC } from "react";
import * as Yup from 'yup';
import { ProfileFormData } from '../../interface/formData';
import Input from '../../component/Input';

interface SubscriptionProps { }

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

export const Subscription: FC<SubscriptionProps> = () => {
  // const dispatch = useDispatch();
  const submitForm = (values: ProfileFormData) => {
    console.log(values);
    // dispatch(updateProfile(values))
  }

  return (
    <div className="flex justify-center items-center mt-40">
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
        
      ">
        {/* <div className="flex flex-col gap-4 p-10  bg-white"> */}  
        <span className="text-[32px] font-weight-800">Subscription</span>
        <div className="flex lg:flex-row m:flex-row flex-col gap-10 w-[100%]">

          <div className="flex flex-col flex-wrap items-center  gap-10 p-10  bg-white">
            <span className="text-[28px] font-bold">Current Service</span>
            <span className="text-xl font-weight-800">$16/Month</span>

            {/* Make it appear as as single line */}
            <div className='h-[0.6px] bg-black mb-5 mt-5  flex w-full'></div>

            <span className="text-xl font-weight-800">Access to all items</span>
            <span className="text-xl font-weight-800">Add upt 4 members free</span>
            <span className="text-xl font-weight-800">Access to all items</span>
            <span className="text-xl font-weight-800">Add upt 4 members free</span>

            <button className="w-[400px] py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-medium" type="submit">
              Subscribed
            </button>
          </div>


          <div className="flex flex-wrap flex-col items-center w-[100%] gap-10 p-10  bg-white">
            <span className="text-[28px] font-bold">Premium Service</span>
            <span className="text-xl font-weight-800">$8/Person/Month</span>

            {/* Make it appear as as single line */}
            <div className='h-[0.6px] bg-black mb-5 mt-5  flex w-full'></div>

            <span className="text-xl font-weight-800">Access to all items</span>
            <span className="text-xl font-weight-800">Integrate other tools</span>
            <span className="text-xl font-weight-800">Add more members</span>
            <button className="w-[400px] flex-wrap py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-medium" type="submit">
              Upgrade
            </button>
          </div>
        </div>

      </div>
      <div className="flex flex-col h-20" />
    </div>)
}