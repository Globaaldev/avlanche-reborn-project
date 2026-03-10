import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [show, setShow] = useState(true);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setShow(false);
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setShow(true);
    }, 250);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // On first render, show immediately
  useEffect(() => {
    setDisplayChildren(children);
    setShow(true);
  }, []);

  return (
    <div
      className="transition-opacity duration-300 ease-in-out"
      style={{ opacity: show ? 1 : 0 }}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
