import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import {
  Button,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";

import LineItemInput from "./line-item-input";
import { LineItem, NewLineItem } from "@scenes/budget/types/LineItem";
import { UPSERT_LINE_ITEM } from "../graphql/mutations";

const UpsertLineItemForm: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [lineItem, setLineItem] = useState<LineItem>(NewLineItem);
  const [upsertLineItem] = useMutation(UPSERT_LINE_ITEM);

  const toast = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await upsertLineItem({
        variables: {
          lineItem,
        },
      });
      setIsSubmitting(false);

      toast({
        title: "Budget saved.",
        // description: "We've created your account for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      router.push("/budget");
    } catch (err) {
      setIsSubmitting(false);

      console.error(
        "Could not save line item. Please review the form below or try again later."
      );
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newVal: string | number | boolean;
    const { name, type, value } = e.currentTarget;

    type === "number"
      ? (newVal = parseFloat(value))
      : type === "boolean"
      ? (newVal = value == "true")
      : (newVal = value);

    setLineItem((prevLineItem: LineItem) => ({
      ...prevLineItem,
      [name]: newVal,
    }));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <LineItemInput
        inputId="title"
        inputType="title"
        labelText="Title"
        onChange={(e) => handleInputChange(e)}
      />
      <LineItemInput
        inputId="date"
        inputType="date"
        labelText="Date"
        onChange={(e) => handleInputChange(e)}
      />

      <FormLabel>Amount</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children="$"
        />
        <Input
          name="amount"
          type="number"
          placeholder="Enter amount"
          onChange={(e) => handleInputChange(e)}
        />
      </InputGroup>

      <FormLabel>Notes</FormLabel>
      <Textarea
        name="description"
        placeholder="Add any additional notes here"
        onChange={(e) => handleInputChange(e)}
      />

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Save
      </Button>
    </form>
  );
};

export default UpsertLineItemForm;
