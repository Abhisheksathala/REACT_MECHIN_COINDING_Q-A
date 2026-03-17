import React from 'react';

const StepProgressbar = ({ steps, activesteps, setactivesteps }) => {
  // Go to previous step
  const prev = () => {
    setactivesteps((prev) => Math.max(prev - 1));
  };

  // Go to next step
  const next = () => {
    setactivesteps((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const calculateWidth = () => {
    if (steps.length <= 1) return '0%';
    return `${(activesteps / (steps.length - 1)) * 100}%`;
  };
  
  console.log(calculateWidth());

  return (
    <div className="w-full flex flex-col items-center p-4 gap-4">
      {/* Progress bar */}
      <div className="relative w-full h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full bg-green-500 transition-all duration-300"
          style={{ width: calculateWidth() }}
        ></div>
      </div>

      {/* Step indicators */}
      <div className="flex justify-between w-full text-sm font-medium">
        {steps.map((item, index) => (
          <div key={index} className={`flex flex-col items-center `}>
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                index <= activesteps
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-white border-gray-400'
              }`}
            >
              {index + 1}
            </div>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={prev}
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
          disabled={activesteps === 0}
        >
          Prev
        </button>
        <button
          onClick={next}
          className="px-4 py-2 bg-green-500 text-white rounded-md disabled:opacity-50"
          disabled={activesteps === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepProgressbar;
