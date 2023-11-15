import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #ffbc0d;

  header {
    display: flex;
    gap: 4rem;
    padding: 2.6rem 20rem;

    h3 {
      font-size: 3.6rem;
      color: #292929;
      font-weight: 900;
    }

    p {
      width: 50rem;
      margin-top: 1rem;
      font-size: 1.4rem;
      color: #292929;
    }
  }
`;

export const HoverFooter = styled.div`
  margin-top: -0.1rem;
  margin-bottom: 5rem;

  img {
    width: 100%;
  }
`;

export const GridFooter = styled.footer`
  display: grid;
  grid-template-columns: 15rem 15rem 15rem 15rem;
  justify-content: space-between;
  width: 120rem;
  margin: 0 auto;
  padding-inline: 10rem;

  h4 {
    font-weight: 400;
    font-size: 1.6rem;
    margin-bottom: 2rem;
    color: #292929;
  }

  ul {
    list-style: none;
  }

  li {
    font-size: 1.6rem;
    color: #6f6f6f;
    padding: 0.4rem;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 120rem;
  margin-inline: auto;
  padding-inline: 10rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  img {
    width: 15rem;
    height: 15rem;
  }

  & > *:first-child {
    display: flex;
    gap: 1rem;
  }

  & > *:last-child {
    display: flex;
    gap: 2rem;
  }
`;

export const TermosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 120rem;
  margin-inline: auto;
  padding-inline: 10rem;
  margin-bottom: 2rem;
  margin-top: 2rem;

  & > *:first-child {
    display: flex;
    gap: 1rem;
    color: #6f6f6f;
    font-size: 1.4rem;
  }

  & > *:last-child {
    display: flex;
    align-items: center;
    color: #6f6f6f;
    font-size: 1.4rem;

    img {
      width: 3rem;
    }
  }
`;
