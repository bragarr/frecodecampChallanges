function palindrome(str) {
    const text = (str.replace(/_|-|\W/g, "").toLowerCase()).split();
    const reverseText = (((((str.replace(/_|-|\W/g, "")).toLowerCase()).split("")).reverse()).join(""));
    const resultado = text[0]===reverseText ? true : false;
    return resultado;
}