import { GetServerSideProps } from "next";
import React, { ReactElement } from "react";
import EditBudgetPage from ".";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: { id: context.params?.id },
  };
};

const EditBudgetPageWrapper = (props: {
  id: string;
}): ReactElement<any, any> => <EditBudgetPage {...props} />;

export default EditBudgetPageWrapper;
