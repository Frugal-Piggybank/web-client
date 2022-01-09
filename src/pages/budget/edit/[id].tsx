import React, { ReactElement } from "react";
import { GetServerSideProps } from "next";
import { withPageAuthRequired, UserProfile } from "@auth0/nextjs-auth0";

import EditBudgetPage from ".";

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    return {
      props: { id: context.params?.id },
    };
  },
});

const EditBudgetPageWrapper = (props: {
  id: string;
  user: UserProfile;
}): ReactElement<any, any> => {
  return <EditBudgetPage {...props} />;
};

export default EditBudgetPageWrapper;
