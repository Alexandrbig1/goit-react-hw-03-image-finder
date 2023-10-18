import { ModalDivOverlay, ModalDivModal } from "./Modal.styled";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function ModalWindow({ ModalIsOpen, ModalIsClose }) {
  return (
    <Modal style={customStyles} contentLabel="Example Modal">
      <ModalDivOverlay>
        <ModalDivModal>
          <img src="" alt="" />
        </ModalDivModal>
      </ModalDivOverlay>
    </Modal>
  );
}
