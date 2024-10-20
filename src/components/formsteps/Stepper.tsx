"use client";

import React, { useEffect, useRef, useState } from "react";

interface Props {
  steps: string[];
  currentStep: any;
}

const Stepper = ({ steps, currentStep }: Props) => {
  const [newStep, setNewStep] = useState<string[]>([]);
  const stepRef = useRef({});

  const updateStep = (stepNumber: number, steps: any) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      // current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }
      // step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      // step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    // create object
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step: any, index: number) => {
    const number = index + 1;
    return (
      <li className="relative" key={index}>
        <a href="" className="flex items-center font-medium w-full">
          <span
            className={`w-6 h-6 ${step.selected ? "bg-indigo-600 text-white" : "bg-white text-slate-700"} border border-transparent rounded-full flex justify-center items-center mr-3 text-sm  lg:w-8 lg:h-8`}
          >
            {number}{" "}
          </span>
          <div className="block">
            <h4
              className={`text-base  ${step.selected ? "text-white font-semibold" : "text-slate-200 font-light"}`}
            >
              {step.description}
            </h4>
          </div>
          <svg
            className="w-5 h-5 ml-2 stroke-white sm:ml-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 18L9.67462 13.0607C10.1478 12.5607 10.3844 12.3107 10.3844 12C10.3844 11.6893 10.1478 11.4393 9.67462 10.9393L5 6M12.6608 18L17.3354 13.0607C17.8086 12.5607 18.0452 12.3107 18.0452 12C18.0452 11.6893 17.8086 11.4393 17.3354 10.9393L12.6608 6"
              stroke="stroke-current"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </li>
    );
  });

  return (
    <div className="py-5 lg:py-10 flex items-center justify-center">
      <ol className="lg:flex items-center justify-center w-full space-y-4 lg:space-y-0 lg:space-x-4">
        {displaySteps}
      </ol>
    </div>
  );
};

export default Stepper;
