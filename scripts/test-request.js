const http = require('http');
const options = {
  hostname: 'localhost',
  port: 5001,
  path: '/services/blogs',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log('STATUS:', res.statusCode);
  console.log('HEADERS:', res.headers['content-type']);
  let data = '';
  res.setEncoding('utf8');
  res.on('data', (chunk) => { data += chunk; if (data.length > 200) { res.destroy(); }});
  res.on('end', () => {
    console.log('BODY_START:', data.slice(0, 200).replace(/\n/g, ' '));
  });
});

req.on('error', (e) => { console.error('request error', e); });
req.end();
