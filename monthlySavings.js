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