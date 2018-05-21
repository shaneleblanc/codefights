function expiringPatents(patents) {
//api call to uspto
//search fields applId
const http = require('http');
const postData = JSON.stringify({
  'searchText': 'applId:60447158',
  'df': 'appFilingDate',
  'fq':['appFilingDate:[1988-01-01T00:00:00Z TO 2018-05-20T00:00:00Z]'],
  'qf': 'appFilingDate,applId,patentNumber',
  'sort': 'appFilingDate asc',
  'facet':'false' });

const options = {
  hostname: 'ped.uspto.gov',
  port: 443,
  path: '/api/queries',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});
console.log('About to post..')
// write data to request body
req.write(postData);
req.end();

}
expiringPatents(1);
  /*

var http = require('http')
var request = http.request({
        url: 'https://ped.uspto.gov/api/queries',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
         json: JSON.stringify({
  'searchText': 'applId:60447158',
  'df': 'appFilingDate',
  'fq':['appFilingDate:[1988-01-01T00:00:00Z TO 2018-05-20T00:00:00Z]'],
  'qf': 'appFilingDate,applId,patentNumber',
  'sort': 'appFilingDate asc',
  'facet':'false' })

    }, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk) {

        console.log(chunk);
    });
});
}
*/
