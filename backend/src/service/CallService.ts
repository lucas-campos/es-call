import Call from "../entity/Call";
import CallConstantes from "../entity/CallConstantes";
import CallRepository from "../repository/CallRepository";

export default class CallService {

    private callRepository: CallRepository = new CallRepository();

    async getAll(): Promise<Call[]> {
        return this.callRepository.getAll();
    }

    async addSupportTechnician(callId: number, supportTechnicianId: number): Promise<void> {
        const technicianAddedDate = new Date();
        this.callRepository.addSupportTechnician(
            callId,
            supportTechnicianId,
            technicianAddedDate,
            CallConstantes.ALLOCATED_STATUS
        );
    }

    async addLowPriority(callId: number): Promise<void> {
        this.callRepository.setPriority(callId, CallConstantes.LOW_PRIORITY);
    }

    async addMediumPriority(callId: number): Promise<void> {
        this.callRepository.setPriority(callId, CallConstantes.MEDIUM_PRIORITY);
    }

    async addHighPriority(callId: number): Promise<void> {
        this.callRepository.setPriority(callId, CallConstantes.HIGH_PRIORITY);
    }

}
