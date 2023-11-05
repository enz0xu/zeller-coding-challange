import styled from "styled-components";

export const RadioGroup = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RadioLabel = styled.label<{ $active: boolean }>`
  display: inline-flex;
  gap: 10px;
  align-items: center;
  padding: 16px 10px;
  background-color: ${({ $active }) => ($active ? "aliceblue" : "transparent")};
  border-radius: 8px;
  cursor: pointer;
  text-transform: capitalize;
`;
