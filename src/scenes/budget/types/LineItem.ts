import { Category } from "./Category";

export type LineItem = {
  _id?: string;
  title: string;
  notes: string;
  // isSavings: boolean
  category?: Category;
  amount: number;
  date: Date;
};

export const NewLineItem: LineItem = {
  _id: undefined,
  title: "",
  notes: "",
  // isSavings: false,
  amount: 0,
  date: new Date(),
  category: undefined,
};
