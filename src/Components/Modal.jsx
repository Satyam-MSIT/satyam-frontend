// Third party
import { useEffect, useRef, useCallback } from "react";
import isOutDimensionsClick from "../Functions/isOutsideDimensionsClick";

const CustomModal = ({ className, children, state, hideModalHandler }) => {
  return state === "open" ? (
    <>
      {/* Modal */}
      <div
        className={`fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 ${className}`}
      >
        {children}
      </div>
      ;{/* Backdrop */}
      <div
        className="fixed inset-0 z-20 h-full w-full bg-[rgba(0,0,0,.6)]"
        onClick={hideModalHandler}
      />
      ;
    </>
  ) : (
    <></>
  );
};

const DialogModal = ({ className, children, state, hideModalHandler }) => {
  const dialogRef = useRef();

  useEffect(() => {
    if (state === "open") dialogRef.current.showModal();
    else dialogRef.current.close();
  }, [state]);

  const onClickHandler = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      const dialogDimensions = event.target.getBoundingClientRect();
      if (isOutDimensionsClick(dialogDimensions, clientX, clientY)) {
        hideModalHandler();
      }
    },
    [hideModalHandler],
  );

  return (
    <dialog
      ref={dialogRef}
      className={`backdrop:bg-[rgba(0,0,0,.6)] ${className}`}
      onClick={onClickHandler}
    >
      {children}
    </dialog>
  );
};

const Modal = (props) => {
  return typeof HTMLDialogElement === "function" ? <DialogModal {...props} /> : <CustomModal {...props} />;
};

export default Modal;
