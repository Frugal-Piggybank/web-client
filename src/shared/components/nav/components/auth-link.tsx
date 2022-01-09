import React, { FC } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import NavLink from "./nav-link";

const AuthLink: FC = () => {
  const { user, isLoading } = useUser();

  return isLoading ? (
    <></>
  ) : user ? (
    <NavLink relativeHref="/api/auth/logout" linkText="Sign out" />
  ) : (
    <NavLink relativeHref="/api/auth/login" linkText="Sign in" />
  );
};

export default AuthLink;
