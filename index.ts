export class CronExpressionBuilder {
  private ExpressionVal = "* * * ? * * *";
  private SecondVal = "*";
  private MinuteVal = "*";
  private HoursVal = "*";
  private DayOfMonthVal = "?";
  private DayOfWeekVal = "*";
  private MonthVal = "*";
  private YearVal = "*";
  get Expression() {
    this.ExpressionVal = `${this.SecondVal} ${this.MinuteVal} ${this.HoursVal} ${this.DayOfMonthVal} ${this.MonthVal} ${this.DayOfWeekVal} ${this.YearVal} `;
    return this.ExpressionVal;
  }

  get Second() {
    return {
      /** Every Second */
      EverySecond: () => {
        /** No need to change any thing */
        return this;
      },
      EverySecondsFromSecond: (seconds: number = 1, from: number = 0) => {
        this.SecondVal = `${from}/${seconds}`;
        return this;
      },
      SpecificSeconds: (seconds: number[] = [1]) => {
        if (
          !seconds ||
          typeof seconds != "object" ||
          (seconds as number[]).length == 0
        )
          throw new Error("Fill seconds");

        this.SecondVal = seconds.join(",");
        return this;
      },
      EverySecondBetween: (start: number = 0, end: number = 59) => {
        this.SecondVal = `${start}-${end}`;
        return this;
      },
    };
  }
  get Minute() {
    return {
      /** Every Second */
      EveryMinute: () => {
        /** No need to change any thing */
        return this;
      },
      EveryMinutesFromMinute: (minutes: number = 1, from: number = 0) => {
        this.MinuteVal = `${from}/${minutes}`;
        return this;
      },
      SpecificMinutes: (minutes: number[] = [1]) => {
        if (
          !minutes ||
          typeof minutes != "object" ||
          (minutes as number[]).length == 0
        )
          throw new Error("Fill minutes");

        this.MinuteVal = minutes.join(",");
        return this;
      },
      EveryMinuteBetween: (start: number = 0, end: number = 59) => {
        this.MinuteVal = `${start}-${end}`;
        return this;
      },
    };
  }
  get Hour() {
    return {
      /** Every Second */
      EveryHour: () => {
        /** No need to change any thing */
        return this;
      },
      EveryHoursFromHour: (hours: number = 1, from: number = 0) => {
        this.HoursVal = `${from}/${hours}`;
        return this;
      },
      SpecificHours: (hours: number[] = [1]) => {
        if (
          !hours ||
          typeof hours != "object" ||
          (hours as number[]).length == 0
        )
          throw new Error("Fill hours");

        this.HoursVal = hours.join(",");
        return this;
      },
      EveryHourBetween: (start: number = 0, end: number = 23) => {
        this.HoursVal = `${start}-${end}`;
        return this;
      },
    };
  }
  get Day() {
    return {
      EveryDay: () => {
        return this;
      },
      EveryDaysFromDayOfWeek: (days: number = 1, dayOfWeek: number = 1) => {
        this.DayOfWeekVal = `${dayOfWeek}/${days}`;
        this.DayOfMonthVal = "?";
        return this;
      },
      EveryDaysFromDayOfMonth: (days: number = 1, dayOfMonth: number = 1) => {
        this.DayOfWeekVal = "?";
        this.DayOfMonthVal = `${dayOfMonth}/${days}`;
        return this;
      },
      SpecificDaysOfWeek: (daysOfWeek: number[] = [1]) => {
        if (
          !daysOfWeek ||
          typeof daysOfWeek != "object" ||
          (daysOfWeek as number[]).length == 0
        )
          throw new Error("Fill days of week");

        const DaysName = daysOfWeek.map((day) => this.GetDayName(day));
        this.DayOfWeekVal = DaysName.join(",");
        this.DayOfMonthVal = "?";
        return this;
      },
      LastWeekDayOfMonth: () => {
        this.DayOfWeekVal = "?";
        this.DayOfMonthVal = "LW";
        return this;
      },
      LastDayOfMonth: () => {
        this.DayOfWeekVal = "?";
        this.DayOfMonthVal = "L";
        return this;
      },
      SpecificDaysOfMonth: (daysOfMonth: number[] = [1]) => {
        if (
          !daysOfMonth ||
          typeof daysOfMonth != "object" ||
          (daysOfMonth as number[]).length == 0
        )
          throw new Error("Fill days of month");

        this.DayOfWeekVal = "?";
        this.DayOfMonthVal = daysOfMonth.join(",");
        return this;
      },
      LastSpecificWeekDayOfMonth: (day: number = 1) => {
        this.DayOfWeekVal = `${day}L`;
        this.DayOfMonthVal = "?";
        return this;
      },
      DayBeforeEndOfMonth: (days: number = 1) => {
        this.DayOfWeekVal = "?";
        this.DayOfMonthVal = `L-${days}`;
        return this;
      },
      NearestToDayOfMonth: (day: number = 1) => {
        this.DayOfWeekVal = "?";
        this.DayOfMonthVal = `${day}W`;
        return this;
      },
      OnNthWeekDayOfMonth: (nth: number = 1, day: number = 1) => {
        this.DayOfWeekVal = "?";
        this.DayOfMonthVal = `${day}#${nth}`;
        return this;
      },
    };
  }
  private GetDayName(dayOfWeek: number) {
    switch (dayOfWeek) {
      case 1:
        return "SUN";
      case 2:
        return "MON";
      case 3:
        return "TUE";
      case 4:
        return "WED";
      case 5:
        return "THU";
      case 6:
        return "FRI";
      case 7:
        return "SAT";
      default:
        return "SUN";
    }
  }

  get Month() {
    return {
      /** Every Second */
      EveryMonth: () => {
        /** No need to change any thing */
        return this;
      },
      EveryMonthsFromMonth: (month: number, from: number = 0) => {
        this.MonthVal = `${from}/${month}`;
        return this;
      },
      SpecificMonths: (months: number[]) => {
        if (
          !months ||
          typeof months != "object" ||
          (months as number[]).length == 0
        )
          throw new Error("Fill months");

        const MonthsName = months.map((month) => this.GetMonthName(month));
        this.MonthVal = MonthsName.join(",");
        return this;
      },
      EveryMonthBetween: (start: number, end: number) => {
        this.MonthVal = `${start}-${end}`;
        return this;
      },
    };
  }
  private GetMonthName(monthOfYear: number) {
    switch (monthOfYear) {
      case 1:
        return "JAN";
      case 2:
        return "FEB";
      case 3:
        return "MAR";
      case 4:
        return "APR";
      case 5:
        return "MAY";
      case 6:
        return "JUN";
      case 7:
        return "JUL";
      case 8:
        return "AUG";
      case 9:
        return "SEP";
      case 10:
        return "OCT";
      case 11:
        return "NOV";
      case 12:
        return "DEC";
      default:
        return "SUN";
    }
  }
  get Year() {
    return {
      EveryYear: () => {
        /** No need to change any thing */
        return this;
      },
      EveryYearsFromYear: (years: number, from: number = 0) => {
        this.YearVal = `${from}/${years}`;
        return this;
      },
      SpecificYears: (years: number[] = [2999]) => {
        if (
          !years ||
          typeof years != "object" ||
          (years as number[]).length == 0
        )
          throw new Error("Fill years");
        this.YearVal = years.join(",");
        return this;
      },
      EveryYearsBetween: (start: number = 1999, end: number = 2999) => {
        this.YearVal = `${start}-${end}`;
        return this;
      },
    };
  }
}

const Ex = new CronExpressionBuilder();
console.log(
  Ex.Second.EverySecondsFromSecond(2, 5)
    .Minute.SpecificMinutes([12, 31])
    .Hour.SpecificHours([5, 1])
    .Day.EveryDaysFromDayOfMonth(3, 2)
    .Month.SpecificMonths([1, 2, 4])
    .Year.SpecificYears([2])
    .Expression
);
