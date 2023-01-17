function telephoneCheck(str) {
    const countryCode = 1;
    const strInputOnlyNumbers = (str.replace(/_|-|\W/g, "")).split("");
    const strInputOnlyNumbersSize = strInputOnlyNumbers.length;
    const isUsCoutryPhoneNumber = strInputOnlyNumbers[0]==countryCode ? true : false;

    if(strInputOnlyNumbersSize==11 &&
        isUsCoutryPhoneNumber)
    {
        checkNumberFormatWithCoutryCode();
    } else if(strInputOnlyNumbersSize==10) {
        checkNumberFormatNoCountryCode();
    } else {
        return console.log(false);
    }

    function checkNumberFormatWithCoutryCode() {
        const strInput = str.split(" ").join("");
        if(!Number(strInput[0]) || strInput[0]<0) {
            console.log("Primeiro caso falso");
            console.log(strInput)
        } else if(strInput[1]=="(" && strInput[5]==")") {
            console.log("Caso verdadeiro ()");
            console.log(strInput);
        } else {
            console.log("Caso verdadeiro");
            console.log(strInput);
        }
    }

    function checkNumberFormatNoCountryCode() {
        const strInput = str.split(" ").join("");
        if(!Number(strInput[0]) || strInput[0]<0) {
            console.log("Primeiro caso falso");
            console.log(Number(strInput[0]));
        } else {
            console.log("Caso verdadeiro");
            console.log(strInput);
        }
    }
}

telephoneCheck("1 (555) 555-5555");