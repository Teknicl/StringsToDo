//removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
function removeBlanks1(){
    withBlanks = " Pl ayTha tF u nkyM usi c ";
    noBlanks = "";

    for (let i = 0; i <= withBlanks.length; i++) {
        if (withBlanks[i] != ' ') {
            noBlanks += withBlanks[i];
        }
    }
    console.log(noBlanks);
}

//removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"
function removeBlanks2(withBlanks){
    noBlanks = "";

    for (let i = 0; i < withBlanks.length; i++) {
        if (withBlanks[i] != ' ') {
            noBlanks += withBlanks[i];
        }
        
    }
    console.log(noBlanks);
}

//getDigits("abc8c0d1ngd0j0!8") => 801008
//getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680
function getDigits(anything) {
    digits = "";

    for (let i = 0; i < anything.length; i++) {
        if (!isNaN(anything[i])) {
            digits += anything[i];
        }
    }
    newDigits = Number(digits);
    console.log(newDigits);
}

//acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
//acronym("Live from New York, it's Saturday Night!") => "LFNYISN".
function acronym(phrase) {
    converted = phrase.split(" ");
    output = " ";

    for(word in converted) {
        if(converted[word].length > 0) {
            output += converted[word][0];
        }
    }
    newOutput = output.toUpperCase();
    console.log(newOutput);
}



//countNonSpaces("Honey pie, you are driving me crazy") => 29
//countNonSpaces("Hello world !") => 11
function countNonSpaces(phrase) {
    count = 0

    for (char in phrase) {
        if (phrase[char] != " ") {
            count++;
        }
    }
    console.log(count);
}

//removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
//removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

function removeShorterStrings(arr, len) {
    shortStrings = [];
    Index = 0;

    for(i in arr) {
        if(arr[i].length >= len) {
            shortStrings[Index++] = arr[i];
        }
    }
    console.log(shortStrings);
}