export class Cnpj{
    private _cnpj: string;

    constructor(){
        this._cnpj = ""
    }
    public get cnpj(): string {
        return this._cnpj;
    }
    public set cnpj(value: string) {
        this._cnpj = value;
    }

}