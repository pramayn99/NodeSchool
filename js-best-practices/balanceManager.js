var balance = 0

module.exports = {

    canAfford: function(amount){
        return amount <= balance;
    },

    decreaseBalance: function(amount){
        if(!this.canAfford(amount)){
            throw new Error('Insufficient balance');
        }      
        balance -= amount;
    },

    getBalance: function(){ 
        return balance;
    },

    increaseBalance: function(amount){
        balance += amount;
    },
};