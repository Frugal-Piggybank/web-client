export type LineItem = {
  title: string;
  description: string;
  // isSavings: boolean
  // category?: Category
  amount: number;
  date: Date;
};

export const NewLineItem: LineItem = {
  title: "",
  description: "",
  // isSavings: false,
  amount: 0,
  date: new Date(),
  // category: null,
};
