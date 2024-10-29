
export default class Call {

    private supportTechnicianId: number|null;
    private technicianAddedDate: Date|null;
    private finished: Date|null;

    constructor(
        private readonly id: number|null,
        private readonly name: string,
        private readonly phoneNumber: string,
        private readonly description: string,
        private readonly status: string,
        private readonly priority: string,
        private readonly createdAt: Date
    ) {
        this.supportTechnicianId = null;
        this.technicianAddedDate = null;
        this.finished = null;
    }

    getid(): number|null {
        return this.id;
    }

    getname(): string {
        return this.name;
    }

    getphoneNumber(): string {
        return this.phoneNumber;
    }

    getdescription(): string {
        return this.description;
    }

    getstatus(): string {
        return this.status;
    }

    getpriority(): string {
        return this.priority;
    }

    getcreatedAt(): Date {
        return this.createdAt;
    }

    setSupportTechnicianId(supportTechnicianId: number) {
        this.supportTechnicianId = supportTechnicianId;
    }
    getSupportTechnicianId(): number|null {
        return this.supportTechnicianId;
    }

    setTechnicianAddedDate(technicianAddedDate: Date) {
        this.technicianAddedDate = technicianAddedDate;
    }
    getTechnicianAddedDate(): Date|null {
        return this.technicianAddedDate;
    }

    setFinished(finished: Date) {
        this.finished = finished;
    }
    getFinished(): Date|null {
        return this.finished;
    }
}