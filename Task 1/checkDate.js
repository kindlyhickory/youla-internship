function checkDate(timestamp) {
    if (typeof timestamp !== "number") {
        return 'Вы ввели не timestamp в секундах'
    };
    // Заменил объявление переменных с var на const, т.к. var - это устаревшее применение и может быть причиной возниковения ошибок, связанных с областью видимости.
    const day = new Date(timestamp * 1000).getDate();
    const month = new Date(timestamp * 1000).getMonth() + 1; // неправильное нахождение месяца, добавил + 1
    const year = new Date(timestamp * 1000).getFullYear();
    const hour = new Date(timestamp * 1000).getHours();

    // Исправлен стиль написания кода. Название переменных поправил на camelCase
    const currentDate = new Date(Date.now());
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    const isSameDate = (year == currentYear) && (month == currentMonth) && (day == currentDay) ? true : false;

    return {
        isSameDate: isSameDate,
        dayPeriod: hour > 11 ? 'pm' : 'am'
    }
}

console.log(checkDate(1649333941));