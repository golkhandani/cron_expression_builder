"use strict";
exports.__esModule = true;
exports.CronExpressionBuilder = void 0;
var CronExpressionBuilder = /** @class */ (function () {
    function CronExpressionBuilder() {
        this.ExpressionVal = "* * * ? * * *";
        this.SecondVal = "*";
        this.MinuteVal = "*";
        this.HoursVal = "*";
        this.DayOfMonthVal = "?";
        this.DayOfWeekVal = "*";
        this.MonthVal = "*";
        this.YearVal = "*";
    }
    Object.defineProperty(CronExpressionBuilder.prototype, "Expression", {
        get: function () {
            this.ExpressionVal = this.SecondVal + " " + this.MinuteVal + " " + this.HoursVal + " " + this.DayOfMonthVal + " " + this.MonthVal + " " + this.DayOfWeekVal + " " + this.YearVal + " ";
            return this.ExpressionVal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronExpressionBuilder.prototype, "Second", {
        get: function () {
            var _this = this;
            return {
                /** Every Second */
                EverySecond: function () {
                    /** No need to change any thing */
                    return _this;
                },
                EverySecondsFromSecond: function (seconds, from) {
                    if (seconds === void 0) { seconds = 1; }
                    if (from === void 0) { from = 0; }
                    _this.SecondVal = from + "/" + seconds;
                    return _this;
                },
                SpecificSeconds: function (seconds) {
                    if (seconds === void 0) { seconds = [1]; }
                    if (!seconds ||
                        typeof seconds != "object" ||
                        seconds.length == 0)
                        throw new Error("Fill seconds");
                    _this.SecondVal = seconds.join(",");
                    return _this;
                },
                EverySecondBetween: function (start, end) {
                    if (start === void 0) { start = 0; }
                    if (end === void 0) { end = 59; }
                    _this.SecondVal = start + "-" + end;
                    return _this;
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronExpressionBuilder.prototype, "Minute", {
        get: function () {
            var _this = this;
            return {
                /** Every Second */
                EveryMinute: function () {
                    /** No need to change any thing */
                    return _this;
                },
                EveryMinutesFromMinute: function (minutes, from) {
                    if (minutes === void 0) { minutes = 1; }
                    if (from === void 0) { from = 0; }
                    _this.MinuteVal = from + "/" + minutes;
                    return _this;
                },
                SpecificMinutes: function (minutes) {
                    if (minutes === void 0) { minutes = [1]; }
                    if (!minutes ||
                        typeof minutes != "object" ||
                        minutes.length == 0)
                        throw new Error("Fill minutes");
                    _this.MinuteVal = minutes.join(",");
                    return _this;
                },
                EveryMinuteBetween: function (start, end) {
                    if (start === void 0) { start = 0; }
                    if (end === void 0) { end = 59; }
                    _this.MinuteVal = start + "-" + end;
                    return _this;
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronExpressionBuilder.prototype, "Hour", {
        get: function () {
            var _this = this;
            return {
                /** Every Second */
                EveryHour: function () {
                    /** No need to change any thing */
                    return _this;
                },
                EveryHoursFromHour: function (hours, from) {
                    if (hours === void 0) { hours = 1; }
                    if (from === void 0) { from = 0; }
                    _this.HoursVal = from + "/" + hours;
                    return _this;
                },
                SpecificHours: function (hours) {
                    if (hours === void 0) { hours = [1]; }
                    if (!hours ||
                        typeof hours != "object" ||
                        hours.length == 0)
                        throw new Error("Fill hours");
                    _this.HoursVal = hours.join(",");
                    return _this;
                },
                EveryHourBetween: function (start, end) {
                    if (start === void 0) { start = 0; }
                    if (end === void 0) { end = 23; }
                    _this.HoursVal = start + "-" + end;
                    return _this;
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CronExpressionBuilder.prototype, "Day", {
        get: function () {
            var _this = this;
            return {
                EveryDay: function () {
                    return _this;
                },
                EveryDaysFromDayOfWeek: function (days, dayOfWeek) {
                    if (days === void 0) { days = 1; }
                    if (dayOfWeek === void 0) { dayOfWeek = 1; }
                    _this.DayOfWeekVal = dayOfWeek + "/" + days;
                    _this.DayOfMonthVal = "?";
                    return _this;
                },
                EveryDaysFromDayOfMonth: function (days, dayOfMonth) {
                    if (days === void 0) { days = 1; }
                    if (dayOfMonth === void 0) { dayOfMonth = 1; }
                    _this.DayOfWeekVal = "?";
                    _this.DayOfMonthVal = dayOfMonth + "/" + days;
                    return _this;
                },
                SpecificDaysOfWeek: function (daysOfWeek) {
                    if (daysOfWeek === void 0) { daysOfWeek = [1]; }
                    if (!daysOfWeek ||
                        typeof daysOfWeek != "object" ||
                        daysOfWeek.length == 0)
                        throw new Error("Fill days of week");
                    var DaysName = daysOfWeek.map(function (day) { return _this.GetDayName(day); });
                    _this.DayOfWeekVal = DaysName.join(",");
                    _this.DayOfMonthVal = "?";
                    return _this;
                },
                LastWeekDayOfMonth: function () {
                    _this.DayOfWeekVal = "?";
                    _this.DayOfMonthVal = "LW";
                    return _this;
                },
                LastDayOfMonth: function () {
                    _this.DayOfWeekVal = "?";
                    _this.DayOfMonthVal = "L";
                    return _this;
                },
                SpecificDaysOfMonth: function (daysOfMonth) {
                    if (daysOfMonth === void 0) { daysOfMonth = [1]; }
                    if (!daysOfMonth ||
                        typeof daysOfMonth != "object" ||
                        daysOfMonth.length == 0)
                        throw new Error("Fill days of month");
                    _this.DayOfWeekVal = "?";
                    _this.DayOfMonthVal = daysOfMonth.join(",");
                    return _this;
                },
                LastSpecificWeekDayOfMonth: function (day) {
                    if (day === void 0) { day = 1; }
                    _this.DayOfWeekVal = day + "L";
                    _this.DayOfMonthVal = "?";
                    return _this;
                },
                DayBeforeEndOfMonth: function (days) {
                    if (days === void 0) { days = 1; }
                    _this.DayOfWeekVal = "?";
                    _this.DayOfMonthVal = "L-" + days;
                    return _this;
                },
                NearestToDayOfMonth: function (day) {
                    if (day === void 0) { day = 1; }
                    _this.DayOfWeekVal = "?";
                    _this.DayOfMonthVal = day + "W";
                    return _this;
                },
                OnNthWeekDayOfMonth: function (nth, day) {
                    if (nth === void 0) { nth = 1; }
                    if (day === void 0) { day = 1; }
                    _this.DayOfWeekVal = "?";
                    _this.DayOfMonthVal = day + "#" + nth;
                    return _this;
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    CronExpressionBuilder.prototype.GetDayName = function (dayOfWeek) {
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
    };
    Object.defineProperty(CronExpressionBuilder.prototype, "Month", {
        get: function () {
            var _this = this;
            return {
                /** Every Second */
                EveryMonth: function () {
                    /** No need to change any thing */
                    return _this;
                },
                EveryMonthsFromMonth: function (month, from) {
                    if (from === void 0) { from = 0; }
                    _this.MonthVal = from + "/" + month;
                    return _this;
                },
                SpecificMonths: function (months) {
                    if (!months ||
                        typeof months != "object" ||
                        months.length == 0)
                        throw new Error("Fill months");
                    var MonthsName = months.map(function (month) { return _this.GetMonthName(month); });
                    _this.MonthVal = MonthsName.join(",");
                    return _this;
                },
                EveryMonthBetween: function (start, end) {
                    _this.MonthVal = start + "-" + end;
                    return _this;
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    CronExpressionBuilder.prototype.GetMonthName = function (monthOfYear) {
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
    };
    Object.defineProperty(CronExpressionBuilder.prototype, "Year", {
        get: function () {
            var _this = this;
            return {
                EveryYear: function () {
                    /** No need to change any thing */
                    return _this;
                },
                EveryYearsFromYear: function (years, from) {
                    if (from === void 0) { from = 0; }
                    _this.YearVal = from + "/" + years;
                    return _this;
                },
                SpecificYears: function (years) {
                    if (years === void 0) { years = [2999]; }
                    if (!years ||
                        typeof years != "object" ||
                        years.length == 0)
                        throw new Error("Fill years");
                    _this.YearVal = years.join(",");
                    return _this;
                },
                EveryYearsBetween: function (start, end) {
                    if (start === void 0) { start = 1999; }
                    if (end === void 0) { end = 2999; }
                    _this.YearVal = start + "-" + end;
                    return _this;
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return CronExpressionBuilder;
}());
exports.CronExpressionBuilder = CronExpressionBuilder;

