import Call from "../entity/Call";
import database from "../infra/database";

export default class CallRepository {

    async getAll(): Promise<Call[]>  {
        const callsData = await database.manyOrNone("select c.* from postgres.escall.call as c");
        if (!callsData) {
            return [];
        }
        const calls = callsData.map((callData) => {
            const call =  new Call(callData.id,
                callData.name,
                callData.phone_data,
                callData.description,
                callData.status,
                callData.priority,
                callData.created_at
            );
            call.setFinished(callData.finished_at);
            call.setTechnicianAddedDate(callData.technician_added_date);
            call.setSupportTechnicianId(callData.support_technician_id);

            return call;
        })
        return calls;
    }

    async addSupportTechnician(
        callId: number,
        supportTechnicianId: number,
        technicianAddedDate: Date,
        status: string
    ): Promise<void> {
        await database.none("update postgres.escall.call set support_technician_id = $1, technician_added_date = $2, status = $3 where id = $4",
            [
                supportTechnicianId,
                technicianAddedDate,
                status,
                callId
            ]
        );
    }
}