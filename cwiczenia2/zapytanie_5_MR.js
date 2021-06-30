var card = function() {
for (i = 0; i < this.credit.length; i++){
emit({ c: this.credit[i].currency, n: this.nationality, s: this.sex }, parseFloat(this.credit[i].balance) );}};

var cc = function(c, values){
value = { sum: 0, avg: 0 };
for (i = 0; i < values.length; i++){
value.sum += values[i];}
value.avg = (value.sum / values.length);
return value;};

db.people.mapReduce(
card,
cc,
{query: { nationality: "Poland", sex: "Female" },
out: "creditCard"})

printjson(db.creditCard.find().toArray())