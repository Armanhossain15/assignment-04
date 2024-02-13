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
