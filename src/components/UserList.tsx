import { useContext } from "react";
import {
  Section,
  SectionContent,
  SectionHeader,
} from "./ui-components/Section";
import { UserTypeContext } from "../context/UserTypeContext";
import { UserSection } from "./ui-components/User";

const UserList = () => {
  const { userList, selectedUserType } = useContext(UserTypeContext) || {};

  if (!selectedUserType) return null;
  return (
    <Section>
      <SectionHeader>User List</SectionHeader>
      <SectionContent>
        {userList
          ?.filter((user) => user.role === selectedUserType)
          .map((user) => (
            <UserSection key={user.id}>
              <div>{user.name}</div>
              <div>{user.role}</div>
            </UserSection>
          ))}
      </SectionContent>
    </Section>
  );
};

export default UserList;
