import Call from "../entity/Call";
import CallRepository from "../repository/CallRepository";

export default class CallService {

    private callRepository: CallRepository = new CallRepository();

    async getAll(): Promise<Call[]> {
        return this.callRepository.getAll();
    }
}