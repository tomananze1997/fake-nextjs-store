import { CustomButton } from 'components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const ErrorPage = () => {
  const router = useRouter();
  const redirectTimeout = () => window.setTimeout(() => router.push('/'), 3000);

  useEffect(() => {
    redirectTimeout();
    return () => clearTimeout(redirectTimeout);
  }, [redirectTimeout]);

  return (
    <div className={'flex h-full'}>
      <div className={'m-auto mt-40 border p-3 text-center shadow-xl'}>
        <h1 className={'my-2 text-2xl font-bold text-orange-600'}>
          Oh noooooo..
        </h1>
        <span className={'text-6xl font-bold'}>ERROR 404!</span>
        <h2 className={'mt-4 text-xl font-bold text-orange-500'}>
          The page you are looking for does not exist!
        </h2>
        <CustomButton customStyles={'mb-2 mt-12'} submit={true}>
          Back to homepage
        </CustomButton>
      </div>
    </div>
  );
};

export default ErrorPage;