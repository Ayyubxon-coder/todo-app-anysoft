import { HTMLAttributes } from 'react';

type ButtonPropsType = {
  title: string;
  color?: 'primary' | 'danger';
  type?: 'submit';
} & Partial<HTMLAttributes<HTMLButtonElement>>;

export function Button({
  title,
  color = 'primary',
  type = 'submit',
  ...props
}: ButtonPropsType) {
  return (
    <button
      className={
        color === 'primary'
          ? 'p-2 bg-blue-500 text-white'
          : 'bg-red-700 w-full text-[white]'
      }
      {...props}
    >
      {title}
    </button>
  );
}
