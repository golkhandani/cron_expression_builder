"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronExpressionBuilder = void 0;
class CronExpressionBuilder {
    constructor () {
        this.ExpressionVal = "* * * ? * * *";
        this.SecondVal = "*";
        this.MinuteVal = "*";
        this.HoursVal = "*";
        this.DayOfMonthVal = "?";
        this.DayOfWeekVal = "*";
        this.MonthVal = "*";
        this.YearVal = "*";
    }
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
            EverySecondsFromSecond: (seconds = 1, from = 0) => {
                this.SecondVal = `${from}/${seconds}`;
                return this;
            },
            SpecificSeconds: (seconds = [1]) => {
                if (!seconds ||
                    typeof seconds != "object" ||
                    seconds.length == 0)
                    throw new Error("Fill seconds");
                this.SecondVal = seconds.join(",");
                return this;
            },
            EverySecondBetween: (start = 0, end = 59) => {
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
            EveryMinutesFromMinute: (minutes = 1, from = 0) => {
                this.MinuteVal = `${from}/${minutes}`;
                return this;
            },
            SpecificMinutes: (minutes = [1]) => {
                if (!minutes ||
                    typeof minutes != "object" ||
                    minutes.length == 0)
                    throw new Error("Fill minutes");
                this.MinuteVal = minutes.join(",");
                return this;
            },
            EveryMinuteBetween: (start = 0, end = 59) => {
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
            EveryHoursFromHour: (hours = 1, from = 0) => {
                this.HoursVal = `${from}/${hours}`;
                return this;
            },
            SpecificHours: (hours = [1]) => {
                if (!hours ||
                    typeof hours != "object" ||
                    hours.length == 0)
                    throw new Error("Fill hours");
                this.HoursVal = hours.join(",");
                return this;
            },
            EveryHourBetween: (start = 0, end = 23) => {
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
            EveryDaysFromDayOfWeek: (days = 1, dayOfWeek = 1) => {
                this.DayOfWeekVal = `${dayOfWeek}/${days}`;
                this.DayOfMonthVal = "?";
                return this;
            },
            EveryDaysFromDayOfMonth: (days = 1, dayOfMonth = 1) => {
                this.DayOfWeekVal = "?";
                this.DayOfMonthVal = `${dayOfMonth}/${days}`;
                return this;
            },
            SpecificDaysOfWeek: (daysOfWeek = [1]) => {
                if (!daysOfWeek ||
                    typeof daysOfWeek != "object" ||
                    daysOfWeek.length == 0)
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
            SpecificDaysOfMonth: (daysOfMonth = [1]) => {
                if (!daysOfMonth ||
                    typeof daysOfMonth != "object" ||
                    daysOfMonth.length == 0)
                    throw new Error("Fill days of month");
                this.DayOfWeekVal = "?";
                this.DayOfMonthVal = daysOfMonth.join(",");
                return this;
            },
            LastSpecificWeekDayOfMonth: (day = 1) => {
                this.DayOfWeekVal = `${day}L`;
                this.DayOfMonthVal = "?";
                return this;
            },
            DayBeforeEndOfMonth: (days = 1) => {
                this.DayOfWeekVal = "?";
                this.DayOfMonthVal = `L-${days}`;
                return this;
            },
            NearestToDayOfMonth: (day = 1) => {
                this.DayOfWeekVal = "?";
                this.DayOfMonthVal = `${day}W`;
                return this;
            },
            OnNthWeekDayOfMonth: (nth = 1, day = 1) => {
                this.DayOfWeekVal = "?";
                this.DayOfMonthVal = `${day}#${nth}`;
                return this;
            },
        };
    }
    GetDayName(dayOfWeek) {
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
            EveryMonthsFromMonth: (month, from = 0) => {
                this.MonthVal = `${from}/${month}`;
                return this;
            },
            SpecificMonths: (months) => {
                if (!months ||
                    typeof months != "object" ||
                    months.length == 0)
                    throw new Error("Fill months");
                const MonthsName = months.map((month) => this.GetMonthName(month));
                this.MonthVal = MonthsName.join(",");
                return this;
            },
            EveryMonthBetween: (start, end) => {
                this.MonthVal = `${start}-${end}`;
                return this;
            },
        };
    }
    GetMonthName(monthOfYear) {
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
            EveryYearsFromYear: (years, from = 0) => {
                this.YearVal = `${from}/${years}`;
                return this;
            },
            SpecificYears: (years = [2999]) => {
                if (!years ||
                    typeof years != "object" ||
                    years.length == 0)
                    throw new Error("Fill years");
                this.YearVal = years.join(",");
                return this;
            },
            EveryYearsBetween: (start = 1999, end = 2999) => {
                this.YearVal = `${start}-${end}`;
                return this;
            },
        };
    }
}
exports.CronExpressionBuilder = CronExpressionBuilder;
//# sourceMappingURL=index.js.map