const accountId = 145553
let accountEmail = "amitsuva@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"
let accountState;

// accountId = 46373 // not allowed


accountEmail = "as@as.com"
accountPassword = "54542121"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])