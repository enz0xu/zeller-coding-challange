import React from "react";
import { useSuspenseQuery, gql } from "@apollo/client";
import { ListZellerCustomers } from "../graphql/queries";

const UserList = () => {
  const { data } = useSuspenseQuery(
    gql`
      ${ListZellerCustomers}
    `
  );
  console.log(data);

  return <div>UserList</div>;
};

export default UserList;
