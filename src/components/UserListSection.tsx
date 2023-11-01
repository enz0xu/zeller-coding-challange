import { useEffect, useState } from "react";
import { useSuspenseQuery, gql } from "@apollo/client";
import { ListZellerCustomers } from "../graphql/queries";
import UserTypeSelector from "./UserTypeSelector";
import UserList from "./UserList";
import { UserTypeContext } from "../context/UserTypeContext";
import { User, UserListProps } from "../types";

const UserListSection = () => {
  const { data } = useSuspenseQuery<UserListProps>(
    gql`
      ${ListZellerCustomers}
    `
  );
  const [userTypes, setUserTypes] = useState<string[]>([]);
  const [selectedUserType, setSelectedUserType] = useState<string | null>(null);
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    const {
      listZellerCustomers: { items },
    } = data || {};

    const roles: Set<string> = new Set();
    items.forEach((item) => roles.add(item.role));
    const rolesArr = [...roles];
    
    setUserList(items);
    setUserTypes(rolesArr);
    setSelectedUserType(rolesArr[0]); // default selection
  }, [data]);

  return (
    <UserTypeContext.Provider
      value={{ userList, userTypes, selectedUserType, setSelectedUserType }}
    >
      <UserTypeSelector />
      <UserList />
    </UserTypeContext.Provider>
  );
};

export default UserListSection;
