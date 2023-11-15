import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  text-align: center;
  border-radius: 6px;
  border: 1px solid #e1e1e1;
  margin-top: 3rem;
  max-width: 60rem;
  height: 50rem;
  overflow: hidden;

  div {
    padding-inline: 7rem;
  }

  img {
    width: 100%;
  }

  h2 {
    font-size: 2.4rem;
  }

  p {
    font-size: 1.4rem;
  }

  h2,
  p {
    margin-top: 2rem;
    color: #292929;
  }

  button {
    position: absolute;
    bottom: 2rem;
    right: 50%;
    transform: translate(50%);
    margin-block: 2rem 3rem;
    background-color: #ffbc0d;
    border: none;
    border-radius: 0.4rem;
    padding: 1rem 2rem;
    font-size: 1.6rem;
    font-family: "Inter", sans-serif;
    color: rgba(0, 0, 0, 0.7);
  }
`;
