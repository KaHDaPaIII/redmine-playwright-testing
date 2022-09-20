const db = require('./db.json');

exports.UserCredentials = class UserCredentials {
    constructor() {
        this.username = this.randomString(8);
        this.password = this.randomString(16);
        this.firstname = db.firstName[Math.floor(Math.random() * db.firstName.length)];
        this.lastname = db.lastName[Math.floor(Math.random() * db.lastName.length)].toLowerCase();
        this.lastname = this.lastname.charAt(0).toUpperCase() + this.lastname.slice(1); // first letter to upper case
        this.email = this.firstname.toLowerCase() + '.' + this.lastname.toLowerCase() + Math.floor(400 + Math.random() * 99999) + '@' + db.domains[Math.floor(Math.random() * db.domains.length)];
    }

    randomString(n){
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let s = '';
        for(let i = 0; i < n; i++){
            s += chars[Math.floor(Math.random() * chars.length)];
        }
        return s;
    }
}