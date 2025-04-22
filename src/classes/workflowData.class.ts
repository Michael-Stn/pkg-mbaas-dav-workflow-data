import { Credito } from "@classes/credito/credito.class"
import { ICredito } from "@interfaces/credito/credito.interface"
import { IWorkflowData } from "@interfaces/workflowData.interface"

export class WorkflowData implements IWorkflowData {
    public sessionId: number
    public credito: ICredito

    constructor() {
        this.sessionId = 1
        this.credito = new Credito()
    }
}