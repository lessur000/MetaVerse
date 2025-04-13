import { useState } from "react";

const useNav = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);
  return { nav, toggleNav };
};

export default useNav;
