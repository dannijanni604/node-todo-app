const UserService = require('../services/user.services')


exports.register = async (req, res) => {
    try {

        const { email, password } = req.body;

        const successRes = await UserService.registerUser(email, password);

        res.json({ status: 200, message: 'User Registered Successfully.' });

    } catch (error) {
        throw error;
    }
}

exports.login = async (req, res) => {
    try {

        const { email, password } = req.body;


        const user = UserService.checkUser(email);
        if (!user) {
            throw new Error("User not exist");
        }

        const isMatch = user.comparePassword(password);


        if (isMatch === false) {
            throw new Error("Password is invalid");
        }


        const successRes = await UserService.registerUser(email, password);

        res.json({ status: 200, message: 'User Registered Successfully.' });

    } catch (error) {
        throw error;
    }
}