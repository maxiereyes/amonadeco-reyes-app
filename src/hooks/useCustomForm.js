import { useState } from "react";

export const useCustomForm = (initialState) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return {
    formState,
    handleChange,
  };
};
