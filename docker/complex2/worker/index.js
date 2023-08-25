const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

function fib(index) {
  if (index < 2) return 1;
  let dp=[];
  dp[0]=0;
  dp[1]=1;
  for(var i=2; i<=index; i++){
dp[i]=dp[i-1]+dp[i-2];
  }
return dp[index].toString();
}

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, fib(parseInt(message)));
});
sub.subscribe('insert');
