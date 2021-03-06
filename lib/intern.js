const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school, title) {
        super(name, id, email);
        this.school = school;
        this.title = title;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.title;
    }
}

module.exports = Intern;
