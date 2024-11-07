
  class Account {
    constructor(owner_name){
      this.owner_name = owner_name;
      this.balance=0;
    }

    credit(amount){
      this.balance+=amount;
    }

    describe(){
      return `owner : ${this.owner_name}, balance : ${this.balance}`;
    }
  }

  module.exports = Account;   