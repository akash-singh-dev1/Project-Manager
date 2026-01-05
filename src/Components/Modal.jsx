import { createPortal } from "react-dom";
import { useImperativeHandle, useRef } from "react";
import Button from "./Button";
const Modal = ({ children, ref, buttonCaption, onCancel }) => {
  //internal ref for model component.
  const internalRef = useRef();

  //// Use useImperativeHandle to define the exposed methods
  useImperativeHandle(
    ref,
    () => ({
      showModal() {
        internalRef.current.showModal();
      },
    }),
    []
  );
  return createPortal(
    <dialog ref={internalRef} className=" m-auto rounded-lg p-6 shadow-xl">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button onClick={onCancel}>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
};

export default Modal;
