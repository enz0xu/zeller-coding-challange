export interface User {
  __typename: "ZellerCustomer";
  email: string;
  id: string;
  name: string;
  role: string;
}

export interface UserTypeContextProps {
  selectedUserType: string | null;
  setSelectedUserType: React.Dispatch<React.SetStateAction<string | null>>;
  userTypes: string[];
  userList: User[];
}

export interface ListZellerCustomersProps {
  __typename: "ZellerCustomerConnection";
  items: User[];
}

export interface UserListProps {
  listZellerCustomers: ListZellerCustomersProps;
}
