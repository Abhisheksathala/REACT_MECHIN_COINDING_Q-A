import React from 'react';
import StepProgressbar from './StepProgressbar';

const Stepprogressbartest = () => {
  const [active, setActive] = React.useState(0);

  const steps = ['step 1', 'step 2', 'step 3', 'step 4'];

  return (
    <div>
      <h1 className="text-4xl">StepProgressbar</h1>
      <StepProgressbar setactivesteps={setActive} steps={steps} activesteps={active} />
    </div>
  );
};

export default Stepprogressbartest;
