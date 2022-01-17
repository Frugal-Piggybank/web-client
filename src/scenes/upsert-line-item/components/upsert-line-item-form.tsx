import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  Button,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { FiCalendar, FiDollarSign, FiType } from "react-icons/fi";

import { LineItem, NewLineItem } from "@scenes/budget/types/LineItem";
import { UPSERT_LINE_ITEM } from "../graphql/mutations";
import { GET_EDIT_LINE_ITEM } from "../graphql/queries";
import { GET_CATEGORIES } from "@shared/graphql/queries";
import CategorySelect from "./category-select";
import Loading from "@shared/components/loading";

interface UpsertLineItemFormProps {
  id?: string;
}

const UpsertLineItemForm: FC<UpsertLineItemFormProps> = ({ id }) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [lineItem, setLineItem] = useState<any>(NewLineItem);

  const { loading, data } = useQuery(GET_EDIT_LINE_ITEM, {
    variables: {
      id,
    },
    query: id ? GET_EDIT_LINE_ITEM : GET_CATEGORIES,
    fetchPolicy: "network-only",
  });
  const [upsertLineItem] = useMutation(UPSERT_LINE_ITEM);

  const toast = useToast();
  const router = useRouter();

  const getFormattedDateForInput = (date: Date) => {
    const asString = date.toString();
    const formatted = asString.substring(0, asString.indexOf("T"));

    return formatted;
  };

  useEffect(() => {
    !loading &&
      data.lineItem &&
      setLineItem({
        ...data.lineItem,
        date: getFormattedDateForInput(data.lineItem.date),
        category: data.lineItem.category?._id,
      });
  }, [loading]);

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
        title: lineItem._id ? "Line item updated." : "Line item created.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      router.push("/budget");
    } catch (err) {
      setIsSubmitting(false);

      toast({
        title: "Could not save line item.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

  if (loading) return <Loading />;

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <FormLabel htmlFor="title">Title</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FiType} color="gray.300" />}
        />
        <Input
          name="title"
          type="text"
          placeholder="Enter a title"
          value={lineItem.title}
          onChange={(e) => handleInputChange(e)}
        />
      </InputGroup>

      <FormLabel htmlFor="date">Date</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FiCalendar} color="gray.300" />}
        />
        <Input
          name="date"
          type="date"
          value={`${lineItem.date}`}
          onChange={(e) => handleInputChange(e)}
          pattern="\d{4}-\d{2}-\d{2}"
        />
      </InputGroup>

      <CategorySelect
        categories={data?.categories}
        currentCategoryId={lineItem.category ?? ""}
        onSelect={handleInputChange}
      />

      <FormLabel>Amount</FormLabel>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FiDollarSign} color="gray.300" />}
        />
        <Input
          name="amount"
          type="number"
          placeholder="Enter amount"
          value={lineItem.amount}
          onChange={(e) => handleInputChange(e)}
        />
      </InputGroup>

      <FormLabel>Notes</FormLabel>
      <Textarea
        name="notes"
        placeholder="Add any additional notes here"
        value={lineItem.notes}
        onChange={(e) => handleInputChange(e)}
      />

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Save
      </Button>
    </form>
  );
};

export default UpsertLineItemForm;
