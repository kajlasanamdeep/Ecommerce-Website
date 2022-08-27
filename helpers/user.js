import { compareSync, hashSync } from "bcrypt";
import userModel from "../models/userModel";
import Jwt from "./jsonwebtoken";

const register = async function (req) {
    try {

        let payload = req.body;
        let existingUser = await userModel.findOne({
            email: payload.email,
            isDeleted: false
        });

        if (existingUser)
            return {
                status: 422,
                message: "EMAIL_ALREADY_TAKEN"
            };

        payload.password = hashSync(payload.password, 10);
        let user = await userModel.create(payload);

        return {
            status: 201,
            message: "USER_REGISTER_SUCCESSFULLY",
            data: {
                userType: user.userType
            }
        };

    } catch (error) {

        throw error;

    }
};

const login = async function (req) {
    try {

        let payload = req.body;
        let user = await userModel.findOne({
            email: payload.email,
            isDeleted: false
        });

        if (!user){
            return {
                status: 404,
                message: "USER_NOT_FOUND"
            };
        }
        if (user.isBlocked){
            return {
                status: 403,
                message: "USER_IS_BLOCKED"
            };
        }
        
        let isCorrect = compareSync(payload.password, user.password);

        if (!isCorrect) {
            return {
                status: 400,
                message: "INVALID_PASSWORD"
            };
        }
        let accessToken = Jwt.Sign(user);
        return {
            status: 200,
            message: "USER_LOGGED_SUCCESSFULLY",
            data: {
                accessToken,
                userType: user.userType
            }
        };

    } catch (error) {

        throw error;

    }
};

export { register, login };