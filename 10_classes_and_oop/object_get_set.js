const User={
    _email:'h@hc.com',
    _passord:"abc",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email=value
    }
}

const tea=Object.create(User)
console.log(tea.email);//get email this is method for emial property it is not a function
console.log(tea._email);
