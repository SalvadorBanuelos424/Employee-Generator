const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, room) {
        super(name, id, email);

        this.room = room;
    }

    getJob() {
        return "Manager"
    }
    
    getRoom() {
        return this.room;
    } 
}

module.exports = Manager;
