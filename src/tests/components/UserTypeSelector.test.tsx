import { render, fireEvent, screen } from "@testing-library/react";
import UserTypeSelector from "../../components/UserTypeSelector";
import { UserTypeContext } from "../../context/UserTypeContext";
import {
  userTypesMock as userTypes,
  userListMock as userList,
} from "./__testData__/userList";

test("renders UserTypeSelector and allows type selection", () => {
  const setUserType = jest.fn();

  render(
    <UserTypeContext.Provider
      value={{
        userList,
        selectedUserType: "MANAGER",
        setSelectedUserType: setUserType,
        userTypes,
      }}
    >
      <UserTypeSelector />
    </UserTypeContext.Provider>
  );

  fireEvent.click(screen.getByLabelText(/ADMIN/i));
  expect(setUserType).toHaveBeenCalledWith("ADMIN");
});
