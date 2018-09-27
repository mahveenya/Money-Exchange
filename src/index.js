// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let exchangedMoney = {};
    let err = {error: "You are rich, my friend! We don't have so much coins for exchange"};
   
    if (currency < 1){
       return exchangedMoney;
    };
    if (currency > 10000){
        return err;
    };
    
    exchangedMoney.H = Math.floor(currency/50);
    exchangedMoney.Q = Math.floor((currency%50)/25);
    exchangedMoney.D = Math.floor(((currency%50)%25)/10);
    exchangedMoney.N = Math.floor((((currency%50)%25)%10)/5);
    exchangedMoney.P = Math.floor(currency%5);
    
    for (key in exchangedMoney){
        if (exchangedMoney[key] === 0){
            delete exchangedMoney[key];
        }
    }
    return exchangedMoney;
    

}
// makeExchange(0)  --> {}
// makeExchange(1)  --> {"P":1}
// makeExchange(43) --> {"Q":1,"D":1,"N":1,"P":3}
// makeExchange(91) --> {"H":1,"Q":1,"D":1,"N":1,"P":1}
// makeExchange(9999999)  --> {error: "You are rich, my friend! We don't have so much coins for exchange"}