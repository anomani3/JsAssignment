const person = {
    firstName : "Ashraf",
    lastName : "Nomani",
    greeting : function(){
        alert('Hi! I\m ' + this.firstName + this.middleName + this.lastName + '.');
    }
};

document.write(person.firstName + " ");
person.middleName = "Ashraf";
document.write(person.middleName + "  ");
document.write(person.lastName);
console.log(person.greeting());