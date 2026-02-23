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
        while(Robot.allNames.has(newName)) {
            newName = this.getName();
        };

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
