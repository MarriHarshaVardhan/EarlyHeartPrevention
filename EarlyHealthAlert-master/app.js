const express = require('express');
const server = express();
const path = require('path');
const PORT = 8080

server.use(express.static(path.join(__dirname , '/dist')));
server.use('/images', express.static(path.join(__dirname, '/dist/images')));

server.get('/',(req,res)=>{
    res.render('index');
});

server.listen(PORT,()=>{
console.log(`Server running on port http://localhost:${PORT}`);
}
);
