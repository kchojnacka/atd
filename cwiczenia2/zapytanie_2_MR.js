var f = function() {
for (i = 0; i < this.credit.length; i++){
emit(this.credit[i].currency, parseFloat(this.credit[i].balance));}}

var ftotal = function(curreny, balance) {
total = 0;
for (i = 0; i < balance.length; i++){
total += balance[i];}
return total;}

db.people.mapReduce(
f,
ftotal,
{out: "balance",})

printjson(db.balance.find().toArray())