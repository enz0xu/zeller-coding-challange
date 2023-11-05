import { useContext } from "react";
import {
  Section,
  SectionContent,
  SectionHeader,
} from "./ui-components/Section";
import { UserTypeContext } from "../context/UserTypeContext";
import {
  UserListSection,
  UserAvator,
  UserName,
  UserRole,
  UserItem,
} from "./ui-components/User";

const UserList = () => {
  const { userList, selectedUserType } = useContext(UserTypeContext) || {};

  if (!selectedUserType) return null;
  return (
    <Section data-testid="user-list">
      <SectionHeader>
        {selectedUserType.toLocaleLowerCase()} Users
      </SectionHeader>
      <SectionContent>
        <UserListSection>
          {userList
            ?.filter((user) => user.role === selectedUserType)
            .map((user) => (
              <UserItem key={user.id}>
                <UserAvator>{user.name.substring(0, 1)}</UserAvator>
                <div>
                  <UserName>{user.name}</UserName>
                  <UserRole>{user.role}</UserRole>
                </div>
              </UserItem>
            ))}
        </UserListSection>
      </SectionContent>
    </Section>
  );
};

export default UserList;
