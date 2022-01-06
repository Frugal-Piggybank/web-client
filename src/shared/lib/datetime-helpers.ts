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

const getMonthStartAndEndDay = (month?: number, year?: number) => {
  let activeMonth = month ?? new Date().getUTCMonth();
  let activeYear = year ?? new Date().getUTCFullYear();

  // console.log(`Getting start and end day for ${month}`);
  let lastDay = new Date(Date.UTC(activeYear, activeMonth + 1, 0));
  let firstDay = new Date(Date.UTC(activeYear, activeMonth, 1));

  return { start: firstDay.toISOString(), end: lastDay.toISOString() };
};

export { formatDateTime, monthNames, getMonthStartAndEndDay };
