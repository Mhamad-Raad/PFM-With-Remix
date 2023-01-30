import ModalStyles from "~/styles/components/AddTransactionModal.css"
import CloseIcon from "~/assets/Icons/CloseIcon"
import ModalForm from "./ModalForm"
import { CSSTransition } from "react-transition-group"

export default function AddTransactionModal({ closeHandler, isModalOpen }) {
  return (
    <>
      <CSSTransition
        in={isModalOpen}
        timeout={250}
        mountOnEnter
        unmountOnExit
      >
        <div className="modal-bg" onClick={closeHandler} />
      </CSSTransition>
      <CSSTransition
        in={isModalOpen}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: "",
          enterActive: "ModalOpen",
          exit: "",
          exitActive: "ModalClosed",
        }}
      >
        <div className="modal">
          <div className="modal__modal-header">
            <h2>Add Transaction</h2>
            <button onClick={closeHandler}>
              <CloseIcon />
            </button>
          </div>
          <ModalForm closeHandler={closeHandler} />
        </div>
      </CSSTransition>
    </>
  )
}

export function links() {
  return [{ rel: "stylesheet", href: ModalStyles }]
}
