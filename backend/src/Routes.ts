import AddCallForSupportTechnicianController from "./controller/AddCallForSupportTechnicianController";
import GetAllCallsController from "./controller/GetAllCallsController";
import GetAllSupportTechnicianController from "./controller/GetAllSupportTechnicianController";
import Server, { HttpMethod } from "./infra/http/Server";

export default class Routes {

    static defineRoutes(server: Server) {
        server.on(HttpMethod.GET, "/call", new GetAllCallsController());
        server.on(HttpMethod.GET, "/support-technician", new GetAllSupportTechnicianController());
        server.on(HttpMethod.PUT, "/call/add-support-technician", new AddCallForSupportTechnicianController());
    }
}