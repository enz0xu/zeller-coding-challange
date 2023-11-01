import { useContext } from "react";
import { UserTypeContext } from "../context/UserTypeContext";
import {
  Section,
  SectionContent,
  SectionHeader,
} from "./ui-components/Section";

const UserTypeSelector = () => {
  const { userTypes, setSelectedUserType, selectedUserType } =
    useContext(UserTypeContext) || {};

  return (
    <Section>
      <SectionHeader>User Types</SectionHeader>
      <SectionContent>
        {userTypes?.map((userType) => (
          <label key={userType}>
            <input
              type="radio"
              name="user-types"
              checked={userType === selectedUserType}
              onChange={() => {
                setSelectedUserType?.(userType);
              }}
            />
            {userType}
          </label>
        ))}
      </SectionContent>
    </Section>
  );
};

export default UserTypeSelector;
