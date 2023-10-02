import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  type: string;
  error?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  other?: object;
}

const Input: FC<InputProps> = ({ error, value, placeholder, onChange, type, id, label,...other}) => {
  return (
    <div className="flex flex-col w-full">
       {label ? (
        <div className='py-2'>
          {label}
        </div>
      ) : null}
      <input
        className="mb-4 p-4 w-full bg-white rounded border border-black outline-none text-sm transition duration-150 ease-in-out"
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...other}
      />
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
export default Input;