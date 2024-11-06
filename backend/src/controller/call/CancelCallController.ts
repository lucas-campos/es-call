import HttpRestController from "../../infra/http/HttpRestController";
import Request from "../../infra/http/Request";
import Response from "../../infra/http/Response";
import CallService from "../../service/CallService";

export default class CancelCallController implements HttpRestController {

    private callService: CallService = new CallService();

    async execute(request: Request, response: Response): Promise<void> {
        try {
            const callId = request.getBody().callId;
            await this.callService.cancelCall(callId);
            response.status(200).end()
        } catch (erro: any) {
            response.status(400).send({
                message: erro.message
            });
        }
    }
}