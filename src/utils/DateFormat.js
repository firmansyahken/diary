export const dateFormat = time => {
    const dateString = time
    const date = new Date(dateString)
    const formattedDate = date.toISOString().split('T')[0]
    return formattedDate
}
