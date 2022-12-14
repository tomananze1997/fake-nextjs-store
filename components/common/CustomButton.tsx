import classNames from 'classnames';
import { useRouter } from 'next/router';
import type { FC } from 'react';

type CustomButtonProps = {
  children: string;
  customStyles?: string;
  onCLickRoute?: string;
};

export const CustomButton: FC<CustomButtonProps> = ({
  children,
  customStyles,
  onCLickRoute
}: CustomButtonProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => (onCLickRoute ? router.push(onCLickRoute) : null)}
      className={classNames(
        '!inline-block rounded bg-green-600 px-2 py-0.5 font-bold text-white hover:opacity-90 active:scale-90 active:opacity-60',
        customStyles
      )}
    >
      {children}
    </button>
  );
};
