export function getWeekNumber(date) {
  const weekNumber = Math.floor(date.getDate() / 7)
  return weekNumber
}

export function getCurrentWeekNumber() {
  const currentDate = new Date()
  const weekNumber = Math.floor(currentDate.getDate() / 7)
  return weekNumber
}
