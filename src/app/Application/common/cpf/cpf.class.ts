export class Cpf{
    private _cpf: string;

    constructor(){
        this._cpf = ""
    }
    public get cpf(): string {
        return this._cpf;
    }
    public set cpf(value: string) {
        this._cpf = value;
    }

}