function deleteInvalids(array) {
    let newArray = []
    if (Array.isArray(array)) {
        for (const arrayElement of array)
            if (typeof arrayElement == 'number') {
                newArray.push(arrayElement)
            }
        return newArray
    }
    else{
        return 'Invalid Array'
    }
}


