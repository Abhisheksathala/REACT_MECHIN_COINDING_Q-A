import React from 'react';
import Tooltip from './Tooltip';

const Tooltiptest = () => {
  return (
    <div>
      <Tooltip content={'tooltip'} children={<p>hover me</p>} />
    </div>
  );
};

export default Tooltiptest;
