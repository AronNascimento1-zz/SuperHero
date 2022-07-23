import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  input {
    width: 300px;
    height: 30px;
    font-size: 18px;
    border-radius: 8px;
    border: 1px solid black;
    padding-left: 1rem;
    &:focus {
      border: 1px solid blue;
    }
  }
`;
