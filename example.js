var tank = require('./client/aquamonitorclient');



tank.createReading(72.52)
  .then(function(response) {
    console.log(response);
  })
  .catch(function (err) {
    console.error(err);
  });
