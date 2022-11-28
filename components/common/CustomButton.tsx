import classNames from 'classnames';
import type { FC } from 'react';

type CustomButtonProps = {
  children: string;
  submit?: boolean;
  customStyles?: string;
};

export const CustomButton: FC<CustomButtonProps> = ({
  children,
  submit,
  customStyles
}: CustomButtonProps) => (
  <button
    className={classNames(
      'inline-block rounded bg-green-600 px-2 py-0.5 font-bold text-white hover:opacity-90 active:scale-90 active:opacity-60',
      { 'bg-red-600': !submit },
      customStyles
    )}
  >
    {children}
  </button>
);
