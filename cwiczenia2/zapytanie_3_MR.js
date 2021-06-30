var fJob = function() {
emit('job', this.job);}

var uniqueJob = function(job, values){
var jobs = new Set();
for( i = 0; i < values.length; i++){
jobs.add(values[i]);}
var jobArray = [];
jobs.forEach(job => { jobArray.push(job)});
return jobArray;}

db.people.mapReduce(
fJob,
uniqueJob,
{out: "jobs"})

printjson(db.jobs.find().toArray())