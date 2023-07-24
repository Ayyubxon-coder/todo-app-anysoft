import { InputHTMLAttributes } from 'react';

type InputPropsType = InputHTMLAttributes<HTMLInputElement>;

export function Input({ ...props }: InputPropsType) {
  return <input {...props} />;
}
