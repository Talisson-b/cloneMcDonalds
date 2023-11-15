import styled from "styled-components";
import * as HoverCard from "@radix-ui/react-hover-card";

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  gap: 2rem;
  background-color: #fff;
  justify-content: center;
  /* max-width: 1500px; */
  width: 100%;
  padding-top: 2rem;
  margin-inline: auto;
  z-index: 999;
  /* box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15); */
  nav {
    display: flex;
    gap: 25rem;

    div {
      display: flex;
      gap: 2.4rem;
    }
  }

  nav + nav {
    margin-top: 1.5rem;
  }
`;

export const NavInfos = styled.ul`
  display: flex;
  gap: 23px;
  list-style: none;
  font-size: 1.3rem;
  line-height: 2.1rem;
  color: #606060;
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 23px;
  list-style: none;
  font-size: 1.7rem;
  color: #292929;
  cursor: pointer;

  li {
    cursor: pointer;
  }

  li:hover {
    border-bottom: 2px solid #ffbc0d;
  }
`;

const BaseButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 2rem;
  font-family: "Inter", sans-serif;
  cursor: pointer;
`;

export const ButtonLeft = styled(BaseButton)`
  background-color: transparent;
  font-size: 1.4rem;
`;

export const ButtonRight = styled(BaseButton)`
  background-color: #ffbc0d;
  font-size: 1.6rem;
  border-radius: 0.6rem;
`;
