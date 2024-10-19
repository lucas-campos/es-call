import ExpressServer from "./infra/http/express/ExpressServer"
import path from "path";

// Configurações servidor http
const directoryPathForPublicImages = path.join(__dirname, "..", "public");
const server = new ExpressServer(directoryPathForPublicImages);

// TODO add rotas aqui

server.listen(3000);

console.log("es-call backend running");
