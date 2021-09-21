var http = require('http');

var server = http.createServer((req, res) => {
    if (req.url == '/') {
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content    
        res.write('<html><body><img src="https://www.gre.ac.uk/__data/assets/image/0013/51142/logo_blue_550.png" with="300" height="250"/> <p>This is home Page.</p><a href="/student">Go To student</a></body></html>');
        res.end();
    } else if (req.url == '/student') {
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content    
        res.write('<html><body><input onclick="alert(\'Hello world\')" type="button" value="ok"/><p style="color:red">This is Student Page.</p><a href="/">Go To home</a></body></html>');
        res.end();
    }
})
server.listen(5000)
console.log('server is running!')
//Tu trang index co hyperlink den student, help
//tu help va student co back quay lai trang home
//hien thi anh nao do o trang home
//trang home: co button ok, khi click vao do hien thi dong Hello World