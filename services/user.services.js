const UserModel = require('../model/user.model')


class UserService {


    static async registerUser(email, password) {
        try {
            const createUser = new UserModel({ email, password });
            return await createUser.save();

        } catch (error) {
            throw error;

        }
    }


    static async checkUser(email) {
        try {

            return await UserModel({ email });

        } catch (error) {
            throw error;

        }
    }




module.exports = UserService;