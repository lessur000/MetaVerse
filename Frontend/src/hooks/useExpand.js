import { useState } from "react";

const useExpand = () => {
  const [expanded, setExpanded] = useState({2: true}); //index[2] is expanded stay true

  const handleToggle = (id) => {
    setExpanded((prev) => ({
      [id]: !prev[id], // Expand only the clicked card
    }));
  };
  

  return { expanded, handleToggle };
};

export default useExpand;
