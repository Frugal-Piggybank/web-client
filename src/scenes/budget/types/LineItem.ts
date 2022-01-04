export type LineItem = {
  _id?: string;
  title: string;
  description: string;
  // isSavings: boolean
  // category?: Category
  amount: number;
  date: Date;
};

export const NewLineItem: LineItem = {
  _id: undefined,
  title: "",
  description: "",
  // isSavings: false,
  amount: 0,
  date: new Date(),
  // category: null,
};
