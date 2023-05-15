export const firstCharUpperCase = (value) => {
    return (
        value[0].toUpperCase() + value.substring(1)
    )
}

export const getUniqueListBy = (arr, key) => {
    return [...new Map(arr.map(item => [item[key], item])).values()]

}