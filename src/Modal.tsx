import { useEffect, useRef, FunctionComponent, MutableRefObject } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal: FunctionComponent = ({ children }) => {
  // const elRef = useRef(null);
  //elRef whether be a div or null
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    //if modalroot doesn't exsit, then return
    if (!modalRoot || !elRef.current) {
      return;
    }
    modalRoot.appendChild(elRef.current);
    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);
    

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
