const jsonserver = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = jsonServer.cors();

const PORT = 5000 | 3000;

server.use('/api/v1', router);
server.use(middlewares);
server.use(cors);

server.listen(PORT, () => {  
console.log(`Server is running on http://localhost:${PORT}`);
});
