import { useState } from "react";
import { ModalContainer } from "./styles";

export const Modal = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <ModalContainer onClick={handleOpenModal}>
       
     
      {openModal && (
        <div className="modal">
          <button onClick={handleCloseModal}>fechar</button>
         </div>
       
      )}
    </ModalContainer>
  );
};
