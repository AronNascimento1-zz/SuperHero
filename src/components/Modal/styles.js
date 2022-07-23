import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    width: 500px;
    height: 600px;
    justify-content: center;
    background: white;
    position: relative;
  }
`;
