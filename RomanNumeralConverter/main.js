function convertToRoman(num) {

    const romanLetters = ["I", "V", "X", "L", "C", "D", "M"];

    const toConvert = (num.toString());

    let ru, rd, rh, rt

    function convertLessThenTen(spareNumber) {
        if(spareNumber < 4) {
            ru = romanLetters[0].repeat(spareNumber);
        } else if(spareNumber==4) {
            ru = romanLetters[0] + romanLetters[1];
        } else if(spareNumber==5) {
            ru = romanLetters[1];
        } else if(5 < spareNumber && spareNumber <=8) {
            ru = romanLetters[1] + romanLetters[0].repeat(Number(spareNumber[0])-5);
        } else {
            ru = romanLetters[0] + romanLetters[2];
        }
        return ru;
    }

    function convertTens(spareNumber) {
        if(spareNumber==10) {
            rd = romanLetters[2];
        } else if(spareNumber[0]==1 && spareNumber[1]!=0) {
            rd = romanLetters[2] + convertLessThenTen(spareNumber[1]);
        } else if(spareNumber[0]>1 && spareNumber[0]<4) {
            rd = romanLetters[2].repeat(spareNumber[0]) + convertLessThenTen(spareNumber[1]);
        } else if(spareNumber[0]==4) {
            rd = romanLetters[2] + romanLetters[3] + convertLessThenTen(spareNumber[1]);
        } else if(spareNumber[0]==5) {
            rd = romanLetters[3] + convertLessThenTen(spareNumber[1]);
        } else if(spareNumber[0]>5 && spareNumber[0]<9) {
            rd = romanLetters[3] + romanLetters[2].repeat(Number(spareNumber[0])-5) + convertLessThenTen(spareNumber[1]);
        } else {
            rd = romanLetters[2] + romanLetters[4] + convertLessThenTen(spareNumber[1]);
        }
        return rd;
    }

    function convertHundreds(spareNumber) {
        if(spareNumber[0] < 4 && spareNumber[1]==0 && spareNumber[2]==0) {
            rh = romanLetters[4].repeat(Number(spareNumber[0]));
        } else if(spareNumber[0] < 4 && spareNumber[1]==0 && spareNumber[2]!=0) {
            rh = romanLetters[4].repeat(Number(spareNumber[0])) + convertLessThenTen(spareNumber[2]);
        }   else if(spareNumber[0] < 4 && spareNumber[1]!=0 && spareNumber[2]!=0) {
            rh = romanLetters[4].repeat(Number(spareNumber[0])) + convertTens(spareNumber[1] + spareNumber[2]);
        } else if(spareNumber==400) {
            rh = romanLetters[4] + romanLetters[5];
        } else if(spareNumber[0]==4 && spareNumber[1]==0) {
            rh = romanLetters[4] + romanLetters[5] + convertLessThenTen(spareNumber[2]);
        } else if(spareNumber[0]==4 && spareNumber[1]!=0) {
            rh = romanLetters[4] + romanLetters[5] + convertTens(spareNumber[1] + spareNumber[2]);
        } else if(spareNumber==500) {
            rh = romanLetters[5];
        } else if(spareNumber[0]==5 && spareNumber[1]==0) {
            rh = romanLetters[5] + convertLessThenTen(spareNumber[2]);
        } else if(spareNumber[0]==5 && spareNumber[1]!=0) {
            rh = romanLetters[5] + convertTens(spareNumber[1] + spareNumber[2]);
        } else if(spareNumber > 500 && spareNumber < 900 && spareNumber[1]==0) {
            rh = romanLetters[5] + romanLetters[4].repeat(Number(spareNumber[0]-5)) + convertLessThenTen(spareNumber[2]);
        } else if(spareNumber > 500 && spareNumber < 900 && spareNumber[1]!=0) {
            rh = romanLetters[5] + romanLetters[4].repeat(Number(spareNumber[0]-5)) + convertTens(spareNumber[1] + spareNumber[2]);
        } else if(spareNumber==900) {
            rh = romanLetters[4] + romanLetters[6];
        } else if(spareNumber[0]==9 && spareNumber[1]==0) {
            rh = romanLetters[4] + romanLetters[6] + convertLessThenTen(spareNumber[2]);
        } else if(spareNumber[0]==9 && spareNumber[1]!=0) {
            rh = romanLetters[4] + romanLetters[6] + convertTens(spareNumber[1] + spareNumber[2]);
        }
        return rh;
    }

    function convertThousands(spareNumber) {
        if(spareNumber[0] < 4 && spareNumber[1]==0 && spareNumber[2]==0) {
            rt = romanLetters[6].repeat(Number(spareNumber[0])) + convertLessThenTen(spareNumber[3]);
        } else if(spareNumber[0] < 4 && spareNumber[1]==0 && spareNumber[2]!=0) {
            rt = romanLetters[6].repeat(Number(spareNumber[0])) + convertTens(spareNumber[2] + spareNumber[3]);
        } else if(spareNumber[0] < 4 && spareNumber[1]!=0) {
            rt = romanLetters[6].repeat(Number(spareNumber[0])) + convertHundreds(spareNumber[1] + spareNumber[2] + spareNumber[3]);
        }
        return rt;
    }

    switch(toConvert.length) {
        case 1:
            return convertLessThenTen(toConvert);
            break
        case 2:
            return convertTens(toConvert);
            break
        case 3:
            return convertHundreds(toConvert);
            break
        case 4:
            return convertThousands(toConvert);
            break
    }
}

console.log(convertToRoman(36));