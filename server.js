const http = require('http');
const htmlContent = '<h1>Hello Node!!!!</h1>\n';
const server = http.createServer((req, res) => {
    
    res.setHeader('Content-Type', 'text/html');
    
   
    res.end(htmlContent);
  });
  server.listen(3000, () => {
    console.log('Server running on port 3000');
  });
  