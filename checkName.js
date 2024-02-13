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
