module.exports = function(Reading) {

  Reading.beforeRemote('create', function(context, user, next) {
    var req = context.req;
    req.body.reading_time = Date.now();
    next();
  });

  Reading.latest = function(cb) {

  Reading.find({limit: 1, order: 'reading_time DESC'}, function(err, temperature) {
    cb(null, temperature[0]);
  });


 };


 Reading.remoteMethod(
   'latest',
   {
     http: {path: '/latest', verb: 'get'},
     returns: [
       {arg: 'temperature', type: 'object', root: true}
     ]
   }
 );

};
