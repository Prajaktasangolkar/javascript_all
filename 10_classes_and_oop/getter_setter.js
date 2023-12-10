class User{
    constructor(email,password){
       this.email=email;
       this.password=password; 
    }

    get email(){
        return this._email;
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `${this._password}praju`;
    }
    set password(value){
        this._password=value
    }

}
const hitesh=new User("h@hitesh.ai","123")
console.log(hitesh.email);
console.log(hitesh.password);//123praju
console.log(hitesh._password);//123
