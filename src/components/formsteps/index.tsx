"use client";

import React, { ReactNode } from "react";
import Stepper from "./Stepper";
import FormProvider from "./FormContext";

interface Props {
  children: ReactNode;
  currentStep: any;
  steps: any;
}

const FormSteps = ({ children, currentStep, steps }: Props) => {
  return (
    <div className="w-full">
      <Stepper steps={steps} currentStep={currentStep} />
      <FormProvider>{children}</FormProvider>
    </div>
  );
};

export default FormSteps;
