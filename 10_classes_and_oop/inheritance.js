class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai=new Teacher("chai","chai@teacher.com",'123')
console.log(typeof chai.password);
chai.addCourse()

const masalachai=new User("masalachai")
masalachai.logMe()
chai.logMe()
console.log(chai===masalachai);
console.log(chai instanceof User);
console.log(chai instanceof Teacher);