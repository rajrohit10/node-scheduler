const http=require('http');
var opn = require('opn');
var CronJob = require('cron').CronJob;


const server=http.createServer((req,res)=>{
    res.send('Hello - Server')
})

server.listen(5001,'127.0.0.1',()=>{
    console.log(`Server Started at PORT :5001`)
})


var job = new CronJob('00 30 18 * * 0-6', function() {
    console.log("Cron job running")
    opn('http://divisor.in');

  },null,
  true, /* Start the job right now */
  'Asia/Kolkata'
 /* Time zone of this job. */
);
job.start();