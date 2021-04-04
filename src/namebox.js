import { format, formatDistance, formatRelative, subDays } from 'date-fns'

export const today = format(new Date(), "'Today is' eeee")
