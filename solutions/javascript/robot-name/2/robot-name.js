// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
    static allNames = new Set();

    constructor() {
        this._name = this.getName();
        Robot.allNames.add(this._name);
    }

    get name() {
        return this._name;
    }

    reset() {
        let newName = this.getName();
        do {
            newName = this.getName();
        } while(Robot.allNames.has(newName));

        Robot.allNames.add(newName);
        this._name = newName;
    }

    getName() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = "0123456789"

        const getLetter = () => letters[Math.floor(Math.random() * letters.length)]
        const getNumber = () => numbers[Math.floor(Math.random() * numbers.length)]

        return `${getLetter()}${getLetter()}${getNumber()}${getNumber()}${getNumber()}`
    }
}

Robot.releaseNames = () => {
    Robot.allNames.clear();
};
