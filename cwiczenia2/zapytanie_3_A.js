printjson(db.people.aggregate({$group: {_id:null, uniqueOccupations: {$addToSet: "$job"}}}))