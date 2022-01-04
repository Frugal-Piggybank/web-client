interface DateProps {
  day: string;
  month: string;
  year: number;
}

const monthNames: Array<string> = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDateProps = (date: Date): DateProps => {
  const year = date.getUTCFullYear();
  const month = (1 + date.getUTCMonth()).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");

  return {
    month,
    day,
    year,
  };
};

const formatDateTime = (date: Date): string => {
  const dateProps = getDateProps(new Date(date));
  return `${dateProps.month}/${dateProps.day}/${dateProps.year}`;
};

export { formatDateTime, monthNames };
