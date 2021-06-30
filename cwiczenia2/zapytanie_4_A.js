printjson(db.people.aggregate(
{$group: {_id: "$nationality",
min: {$min: {$divide: [{$convert: {input: "$weight", to: "double"}}, {$pow: [{$divide:[{$convert: {input: "$height", to: "double" }},100]},2]}]}},
max: {$max: {$divide: [{$convert: {input: "$weight", to: "double"}}, {$pow: [{$divide:[{$convert: {input: "$height", to: "double" }},100]},2]}]}},
avg: {$avg: {$divide: [{$convert: {input: "$weight", to: "double"}}, {$pow: [{$divide:[{$convert: {input: "$height", to: "double" }},100]},2]}]}}}}))