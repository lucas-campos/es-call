import GetAllCallsController from "./controller/GetAllCallsController";
import Server, { HttpMethod } from "./infra/http/Server";

export default class Routes {

    static defineRoutes(server: Server) {
        server.on(HttpMethod.GET, "/call", new GetAllCallsController());
    }
}