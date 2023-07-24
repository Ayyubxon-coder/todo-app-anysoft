import { HTMLAttributes, InputHTMLAttributes } from 'react';

type InputPropsType = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }) {
  return <input {...props} />;
}
