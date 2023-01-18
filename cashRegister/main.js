function checkCashRegister(price, cash, cid) {
    let balance = cash - price;
    let allCash = 0;
    const cur = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];
    const result = [];
    const finalChange = {
        status:"",
        change:""
    }

    cid.forEach(money => {
        allCash += money[1];
    });

    function defineFinalStatus() {
        if(allCash > (cash - price) && result.length > 0) {
            finalChange.status = "OPEN";
            finalChange.change = result;
        }
        if(allCash == (cash - price)) {
            finalChange.status = "CLOSED";
            finalChange.change = cid;
        }
        if(allCash < (cash - price) ||
            allCash > (cash - price) && result.length == 0) 
        {
            finalChange.status = "INSUFFICIENT_FUNDS";
            finalChange.change = [];
        }
    }

    function checkIfFundsAreEnough(num1, num2, num3, desc) {
        if((num2-num1) > 0) {
            balance = (num1 % num3).toFixed(2);
            result.push([desc, Number((num1-balance).toFixed(2))]);
        } else if((num2-num1) == 0) {
            balance = 0;
            result.push([desc, num1]);
        } else if((num2-num1) < 0 && num3!=0.01) {
            balance = num1 - num2;
            result.push([desc, num2]);
        } else {
            balance = 0;
            finalChange.status = "INSUFFICIENT_FUNDS"
        }
    }
    while(balance > 0) {
        for(let i=1; i <= cur.length; i++) {
            if((balance % cur[cur.length-i]) < balance &&
                cid[cid.length-i][1] > 0 &&
                allCash >= balance) {
                checkIfFundsAreEnough(balance, cid[cid.length-i][1], (cur[cur.length-i]).toFixed(2),cid[cid.length-i][0]);
            } else if (allCash < balance) {
                balance = 0;
            }
        }
        result.sort(([a,b],[c,d]) => b < d ? 1 : -1); 
    }

    defineFinalStatus();

    return finalChange;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);