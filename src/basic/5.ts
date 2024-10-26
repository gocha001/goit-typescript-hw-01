enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day === (DayOfWeek.Saturday || DayOfWeek.Sunday)) {
    console.log(`${day} - weekend`);
    return true;
  }
   console.log(`${ day } - working`);
   return false;
};

isWeekend(DayOfWeek.Monday);
isWeekend(DayOfWeek.Tuesday);
isWeekend(DayOfWeek.Wednesday);
isWeekend(DayOfWeek.Thursday);
isWeekend(DayOfWeek.Friday);
isWeekend(DayOfWeek.Saturday);
isWeekend(DayOfWeek.Sunday);
