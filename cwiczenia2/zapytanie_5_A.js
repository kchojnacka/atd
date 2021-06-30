printjson(db.people.aggregate(
{$unwind: "$credit"},
{$match: { "nationality": "Poland", "sex": "Female" }},
{$group: { _id: "$credit.currency", 
sum: { $sum: {$convert: {input: "$credit.balance", to: "double" }}},
avg: { $avg: {$convert: {input: "$credit.balance", to: "double" }}}}}))