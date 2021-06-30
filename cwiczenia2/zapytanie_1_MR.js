var mapFunkcja1 = function() {
emit(this.sex, { count: 1, height: parseFloat(this.height), weight: parseFloat(this.weight) });}

var redFunkcja1 = function(sex, values) {
var count = 0;
var h = 0;
var w = 0;
for (i = 0; i < values.length; i++){
count += values[i].count;
h += values[i].height;
w += values[i].weight;}
value = {avgH: 0, avgW: 0};
value.avgH = (h / count);
value.avgW = (w / count);
return value;}

db.people.mapReduce(
mapFunkcja1,
redFunkcja1,
{out: "avg",})

printjson(db.avg.find().toArray())