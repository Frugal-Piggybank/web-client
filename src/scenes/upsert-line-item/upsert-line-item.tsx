import React, { FC } from "react";
import UpsertLineItemForm from "./components/upsert-line-item-form";

interface UpsertLineItemProps {
  id?: string;
}

const UpsertLineItem: FC<UpsertLineItemProps> = ({ id }) => {
  return <UpsertLineItemForm></UpsertLineItemForm>;
};

export default UpsertLineItem;
