import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import type { FC } from 'react';

export const Footer: FC = () => {
  const spanArray = [
    'Terms and Conditions',
    '| Privacy Notice',
    '| Data Settings',
    '| Tech Blog'
  ];
  const clickableSpan = 'cursor-pointer hover:opacity-70 mx-0.5 text-sm';
  const iconStyle = 'hover:text-black';

  return (
    <div className='mt-auto flex items-center justify-evenly bg-neutral-400 py-4 '>
      <div>
        {spanArray.map((element: string) => (
          <span key={element} className={clickableSpan}>
            {element}
          </span>
        ))}
      </div>
      <div>
        <span className={'ml-2 text-xs'}>Find Us On:</span>
        <div>
          <IconButton className={iconStyle}>
            <Facebook />
          </IconButton>
          <IconButton className={iconStyle}>
            <Twitter />
          </IconButton>
          <IconButton className={iconStyle}>
            <Instagram />
          </IconButton>
          <IconButton className={iconStyle}>
            <Pinterest />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
