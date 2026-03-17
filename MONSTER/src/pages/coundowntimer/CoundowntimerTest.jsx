import React from 'react';

import Coundowntimer from './Coundowntimer';

const CoundowntimerTest = () => {
  const handletimeFinish = () => {
    console.log('once timer is fininshed make an api call and save data in the data base ');
  };
  return (
    <div>
      <p className="text-4xl">Coundowntimer</p>
      <Coundowntimer intialtime={100} ontimefiniesh={handletimeFinish} />
    </div>
  );
};

export default CoundowntimerTest;
