export const getDateFormat = () => {
  const timestamp = Date.now()
  const date = new Date(timestamp)

  const day = date.getDate()
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]
  const month = monthNames[date.getMonth()]
  const year = date.getFullYear()

  const formattedDate = `${day} ${month} ${year}`

  return formattedDate
}
