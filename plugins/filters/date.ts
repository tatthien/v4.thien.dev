import { format } from 'date-fns'

export default (value: string, dateFormat = 'MMM dd, yyyy') => {
  if (!value) {
    return value
  }

  const date = new Date(value)

  if (!date) {
    return value
  }

  return format(date, dateFormat)
}
