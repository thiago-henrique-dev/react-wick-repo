import styled from "styled-components";

export const InputContainer = styled.div`
  border: 1px solid #fafafa;
  border-radius: 2rem;

  height: 6.2rem;
  width: 80%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    background-color: transparent;
    color: #FFFFFF;

    border: 0;
    outline: none;

    width: 100%;
    height: 100%;
    padding: 0 2rem;

    font-size: 2rem;
    font-weight: 700;
  }
  &::placeholder {
    color: white;
  }
`