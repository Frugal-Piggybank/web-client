import React, { FC, ReactElement } from "react";
import * as FeatherIcons from "react-icons/fi";

interface DynamicIconProps {
  iconName: string;
}

const DynamicIcon: FC<DynamicIconProps> = ({ iconName }): ReactElement => {
  const fiIconName = iconName as keyof typeof FeatherIcons;

  const FiIcon = fiIconName
    ? FeatherIcons[fiIconName]
    : FeatherIcons["FiHelpCircle"];

  return <FiIcon />;
};

export default DynamicIcon;
