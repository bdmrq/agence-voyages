class Validate {
    constructor(username) {
        this.username = username;
        this.check = function () {
            console.log("checking username " + username);
        };
    }
}

export default Validate;