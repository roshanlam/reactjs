import React, {FC} from 'react';
import clsx from 'clsx';

import './EmptyPage.scss';

interface ComponentProps {
  className?: string;
}

const EmptyPage: FC<ComponentProps> = ({className}) => {
  return (
    <div className={clsx('EmptyPage', className)}>
      <h1>Working on It</h1>
    </div>
  );
};

export default EmptyPage;