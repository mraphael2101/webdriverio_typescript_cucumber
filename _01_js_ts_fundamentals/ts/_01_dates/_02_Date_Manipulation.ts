// A function that calculates the date based on one argument: before today or after today
function calculateDate(direction: string): string {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    let newDay = currentDay;
    if (direction === 'before today') {
        newDay--;
    } else if (direction === 'after today') {
        newDay++;
    } else {
        return 'Invalid direction. Please enter "before today" or "after today".';
    }
    // Check if the new day is valid for the current month and year
    // If not, adjust the month and year accordingly
    let newMonth = currentMonth;
    let newYear = currentYear;
    // Get the number of days in the current month
    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    // If the new day is greater than the number of days in the month, increment the month and set the day to the remainder
    if (newDay > daysInMonth) {
        newMonth++;
        newDay = newDay - daysInMonth;
        // If the new month is greater than 11 (December), increment the year and set the month to 0 (January)
        if (newMonth > 11) {
            newYear++;
            newMonth = 0;
        }
    }
    // If the new day is less than or equal to zero, decrement the month and set the day to the number of days in the previous month
    if (newDay <= 0) {
        newMonth--;
        // If the new month is less than zero (January), decrement the year and set the month to 11 (December)
        if (newMonth < 0) {
            newYear--;
            newMonth = 11;
        }
        // Get the number of days in the previous month
        let daysInPrevMonth = new Date(newYear, newMonth + 1, 0).getDate();
        // Set the day to the number of days in the previous month plus the new day
        newDay = daysInPrevMonth + newDay;
    }
    // Format the year, month and day as strings with leading zeros if needed
    let yearString = String(newYear);
    let monthString = String(newMonth + 1).padStart(2, '0');
    let dayString = String(newDay).padStart(2, '0');
    // Return a string with the date in yyyy-mm-dd format
    return `${yearString}-${monthString}-${dayString}`;
}
