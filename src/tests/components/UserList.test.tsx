import { render, screen } from "@testing-library/react";
import UserList from "../../components/UserList";
import { UserTypeContext } from "../../context/UserTypeContext";
import {
  userTypesMock as userTypes,
  userListMock as userList,
} from "./__testData__/userList";

test("renders UserList", () => {
  const setUserType = jest.fn();

  render(
    <UserTypeContext.Provider
      value={{
        userList,
        selectedUserType: "ADMIN",
        setSelectedUserType: setUserType,
        userTypes,
      }}
    >
      <UserList />
    </UserTypeContext.Provider>
  );

  expect(screen.getByText("David Miller")).toBeInTheDocument();
});
