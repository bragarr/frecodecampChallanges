function telephoneCheck(str) {
    const countryCode = 1;
    const strInputOnlyNumbers = (str.replace(/_|-|\W/g, "")).split("");
    const strInputOnlyNumbersSize = strInputOnlyNumbers.length;
    const isUsCoutryPhoneNumber = strInputOnlyNumbers[0]==countryCode ? true : false;

    function checkNumberFormatWithCoutryCode() {
        const strInput = str.split(" ").join("");
        if(strInput[0]!="-" && strInput[1]=="(" && strInput[5]==")" && strInput[9]=="-" ||
        strInput[0]!="-" && strInput[1]=="(" && strInput[5]==")" ||
        strInput[0]!="-" && strInput[4]=="-" && strInput[8]=="-" ||
        strInput[0]!="-" && strInput[7]=="-" ||
        strInput[0]!="-" && Number(strInput) && Number(strInput)>0)
        {
            return true;
        } else {
            return false;
        }
    }

    function checkNumberFormatNoCountryCode() {
        const strInput = str.split(" ").join("");
        if(Number(strInput) && Number(strInput>0) ||
            strInput[0]=="(" && strInput[4]==")" && strInput[8]=="-" ||
            strInput[3]=="-" && strInput[7]=="-") 
        {
            return true;
        } else {
            return false;
        }

    }

    if(strInputOnlyNumbersSize==11 &&
        isUsCoutryPhoneNumber)
    {
        return checkNumberFormatWithCoutryCode();
    } else if(strInputOnlyNumbersSize==10) {
        return checkNumberFormatNoCountryCode();
    } else {
        return false;
    }
}

telephoneCheck("555-555-5555");