# cron_expression_builder

A simple tool to build your cronjob expression easier

```js
const Ex = new CronExpressionBuilder();
console.log(
  Ex.Second.EverySecondsFromSecond(2, 5)
    .Minute.SpecificMinutes([12, 31])
    .Hour.SpecificHours([5, 1])
    .Day.EveryDaysFromDayOfMonth(3, 2)
    .Month.SpecificMonths([1, 2, 4])
    .Year.SpecificYears([2]).Expression
);

// > 5/2 12,31 5,1 2/3 JAN,FEB,APR ? 2
```
