export class Cep{
    private _cep: string;

    constructor(){
        this._cep = ""
    }
    public get cep(): string {
        return this._cep;
    }
    public set cep(value: string) {
        this._cep = value;
    }

}