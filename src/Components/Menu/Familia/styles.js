import styled from "styled-components";
import * as HoverCard from "@radix-ui/react-hover-card";

export const HoverCards = styled(HoverCard.Content)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-inline: 8rem;
  width: 100vw;
  padding-top: 4rem;
  z-index: 999;
  background-color: #fff;
`;
