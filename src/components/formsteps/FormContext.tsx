import React, { useState, createContext, useContext } from "react";

interface AppContextType {
  data: any;
  setFormValues: any;
}

export const FormContext = createContext({} as AppContextType);

export default function FormProvider({ children }: any) {
  const [data, setData] = useState({});

  const setFormValues = (values: any) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
