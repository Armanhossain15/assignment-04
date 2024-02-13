
function calculateMoney(ticketSale){
    const ticketPrice = 120
    const stapCost = 8 * 50
    const totalCost = 500 + stapCost
    if (ticketSale >= 0){
        const TotalBuy = ticketSale * ticketPrice
        const remaining = TotalBuy - totalCost
        return `total remaining taka is ${remaining}`
    }
    else{
        return 'invalid Number'
    }
}


function checkName(name) {
    let lastWordIndex = name.lastIndexOf('');
    let lastWord = name.charAt(lastWordIndex-1)
    if (lastWord === 'a'){
       return 'Good Name'
    }
    else if (lastWord === 'y'){
       return 'Good Name'
    }
    else if (lastWord === 'i'){
       return 'Good Name'
    }
    else if (lastWord === 'e'){
       return 'Good Name'
    }
    else if (lastWord === 'o'){
       return 'Good Name'
    }
    else if (lastWord === 'u'){
       return 'Good Name'
    }
    else if (lastWord === 'w'){
       return 'Good Name'
    }
    else{
        return 'Bad Name'
    }
 }

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

function password(information) {
    if (typeof information.name == 'string' && typeof information.birthYear == 'number' && typeof information.siteName == 'string') {
        let site = information.siteName.charAt(0).toUpperCase()
        let lastWordIndex = information.siteName.lastIndexOf('');
        if (information.birthYear.toString().length == 4 ){
            let newPassword = site + information.siteName.slice(1, lastWordIndex) + '#' + information.name + '@' + information.birthYear
            return newPassword
        }
    }
    return 'invalid'
}


function monthlySavings(moneys, cost ){
    let savaMoney = 0
    for (const money of moneys){
    if ( money >= 3000){
        let tax = money * 20 / 100
        let moneyWithoutTax = money - tax
        savaMoney = moneyWithoutTax + savaMoney
        continue
    }
    savaMoney = money + savaMoney 
}
savaMoney = savaMoney - cost
return savaMoney
}