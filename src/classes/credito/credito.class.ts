import { ICredito } from "@interfaces/credito/credito.interface"

export class Credito implements ICredito {
    public monto: number

    constructor() {
        this.monto = 0
    }
}