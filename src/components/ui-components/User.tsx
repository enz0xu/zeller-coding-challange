import styled from "styled-components";

export const UserListSection = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const UserItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const UserName = styled.div`
  margin-bottom: .4rem;
`;

export const UserRole = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

export const UserAvator = styled.div`
  display: inline-flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  border-radius: 8px;
`;
