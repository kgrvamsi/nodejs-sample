var sys = require("sys"),  
my_http = require("http");  
my_http.createServer(function(request,response){  
    sys.puts("I got kicked");  
    response.writeHeader(200, {"Content-Type": "text/plain"});  
    response.write("<h1>The Server is Installed successfully with Node</h1>");  
    response.end();  
}).listen(80);  
sys.puts("Server Running on 8080");
     
