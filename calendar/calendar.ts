const calendar = (month: number, year: number) => {
  const calendarRange = [];
  const now = new Date();

  // set the date to first day of the target month and year
  now.setDate(1);
  now.setMonth(month);
  now.setFullYear(year);

  // add last month intervals
  const lastMonthInterval = now.getDay() % 6;
  calendarRange.push(...getDateInterval(now, -1, lastMonthInterval));

  // add current month intervals
  for (let i = 0; i < now.getDate(); i++) {
    calendarRange.push(now.getDate());
    now.setDate(now.getDate() + 1);
  }

  // add next month intervals
  const nextMonthInterval = 42 - calendarRange.length;
  calendarRange.push(...getDateInterval(now, 1, nextMonthInterval));

  return calendarRange;
};

const getDateInterval = (
  date: Date,
  monthInterval: -1 | 1,
  intervalRange: number
) => {
  const intervals = [];
  const now = new Date(date);
  if (!~monthInterval) {
    now.setDate(0);
  }

  for (let i = 0; i < intervalRange; i++) {
    intervals.push(now.getDate());
    now.setDate(now.getDate() + monthInterval);
  }
  return intervals.sort((a, b) => a - b);
};

calendar(1, 2022);
