import { useContext } from "react";
import { UserTypeContext } from "../context/UserTypeContext";
import {
  Section,
  SectionContent,
  SectionHeader,
} from "./ui-components/Section";
import { RadioGroup, RadioLabel } from "./ui-components/Radio";

const UserTypeSelector = () => {
  const { userTypes, setSelectedUserType, selectedUserType } =
    useContext(UserTypeContext) || {};

  return (
    <Section data-testid="user-types-selector">
      <SectionHeader>User Types</SectionHeader>
      <SectionContent>
        <RadioGroup>
          {userTypes?.map((userType) => (
            <RadioLabel key={userType} $active={userType === selectedUserType}>
              <input
                type="radio"
                name="user-types"
                checked={userType === selectedUserType}
                onChange={() => {
                  setSelectedUserType?.(userType);
                }}
              />
              {userType.toLocaleLowerCase()}
            </RadioLabel>
          ))}
        </RadioGroup>
      </SectionContent>
    </Section>
  );
};

export default UserTypeSelector;
