function printVowelsAndConsonant(s) {
    const vowel = 'aeiou'
    const vowelList=[]
    const consonantList=[]

    for(let i = 0 ; i < s.length ; i++){
        let char= s[i]
        if(vowel.includes(char)){
           vowelList.push(char)
        }else{
            consonantList.push(char)
        }
    }

    for(let i=0; i <vowelList.length ; i++)
        {
            console.log(vowelList[i])
        }

    for(let i = 0 ; i < consonantList.length;i++){
         console.log(consonantList[i])
    }
    
}


const s = readLine();
    
printVowelsAndConsonant(s);

