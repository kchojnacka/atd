var bmi = function() {
emit(this.nationality, { h: parseFloat(this.height), w: parseFloat(this.weight) });}

var bmiNationality = function(nationality, values) {
val = { min: 0, max: 0, avg: 0 };
var min = (values[0].w / Math.pow(values[0].h / 100, 2));
var max = min;
var sum = 0;
for (i = 1; i < values.length; ++i){
var bmi = (values[i].w / Math.pow(values[i].h / 100, 2));
sum += bmi;
if (bmi > max) max = bmi;}
if (bmi < min) min = bmi;
val.min = min;
val.max = max;
val.avg = (sum / values.length);
return val;}

db.people.mapReduce(
bmi,
bmiNationality,{
out: "bmi",})

printjson(db.bmi.find().toArray())