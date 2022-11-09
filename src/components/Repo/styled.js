import styled from "styled-components";

export const RepoContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 3.2rem;
    color: #fafafa;

  }

  p {
    font-size: 1.2rem;
    color: #FAFAFA60;
    margin-bottom: 2rem;
  }
    button{
      //ll: unset;
      background-color: transparent;
      border: none;
      
      font-weight: 700;

      &:hover {
        opacity: .6;
        cursor: pointer;
      }

      &.remover {
      color: red;
      margin-top: 2rem;
    }
  }

  a {
    text-decoration: none;
    font-weight: 700;

    
    &:hover {
        opacity: .6;
        cursor: pointer;
      }
  }


  hr {
    color: #FAFAFA60;
    margin-top: 2rem;
  }
`