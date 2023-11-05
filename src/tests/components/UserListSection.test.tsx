import React, { Suspense } from "react";
import {
  render,
  waitFor,
  fireEvent,
  screen,
  getByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import UserListSection from "../../components/UserListSection";
import { ListZellerCustomers } from "../../graphql/queries";
import { gql } from "@apollo/client";
import { userListMock } from "./__testData__/userList";

const mocks = [
  {
    request: {
      query: gql`
        ${ListZellerCustomers}
      `,
    },
    result: {
      data: {
        listZellerCustomers: {
          items: userListMock,
        },
      },
    },
  },
];

describe("UserListSection", () => {
  test("renders with user type and user list", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Suspense fallback={<div>Loading...</div>}>
          <UserListSection />
        </Suspense>
      </MockedProvider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => screen.findByTestId("user-list"));
    expect(screen.getByTestId("user-list")).toBeInTheDocument();
    await waitFor(() => screen.findByTestId("user-types-selector"));
    expect(screen.getByTestId("user-types-selector")).toBeInTheDocument();

    const radioButton = await screen.findByText(/ADMIN/i);
    fireEvent.click(radioButton);
    const adminUser = await screen.findByText("David Miller");
    expect(adminUser).toBeInTheDocument();
  });
});
