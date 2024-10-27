import HttpRestController from "../infra/http/HttpRestController";
import Request from "../infra/http/Request";
import Response from "../infra/http/Response";

export default class GetAllCallsController implements HttpRestController {

    async execute(request: Request, response: Response): Promise<void> {
        response.status(200).send([
            { "numero chamado": 1, "descricao": "teste 1"},
            { "numero chamado": 2, "descricao": "teste 2"},
            { "numero chamado": 3, "descricao": "teste 3"}
        ])
    }
}