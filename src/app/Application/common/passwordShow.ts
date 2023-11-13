export class PasswordShow{
    private InputType : string;

    constructor(){
        this.InputType = "password"
    }

    togglePasswordVisibility() {
        this.InputType == 'text' ? this.InputType = 'password' : this.InputType = 'text'
      }

    public getInputType(){
        return this.InputType;
    }
}