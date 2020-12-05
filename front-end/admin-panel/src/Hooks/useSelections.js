import { useState } from "react";

const useSelections = (callback) => {
  const [selections, setSelections] = useState(null);

  const handleChange = (e) => {
    setSelections((selections) => ({
      ...selections,
      [e.target.name]: e.target.checked,
    }));
  };

  return { handleChange, selections };
};

export default useSelections;
