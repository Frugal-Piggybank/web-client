import React, { FC, ReactElement } from "react";
import * as FeatherIcons from "react-icons/fi";

type FiIcons = keyof typeof FeatherIcons;

interface DynamicIconProps {
  iconName: keyof typeof FeatherIcons;
  // iconName: string;
}

const DynamicIcon: FC<DynamicIconProps> = ({ iconName }): ReactElement => {
  // if (iconName typeof FiIcons)

  const FiIcon = FeatherIcons[iconName];

  return <FiIcon />;
};

export default DynamicIcon;
