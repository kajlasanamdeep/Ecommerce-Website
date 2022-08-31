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
        let accessToken = Jwt.Sign(user);
        return {
            status: 201,
            message: "USER_REGISTER_SUCCESSFULLY",
            data: {
                accessToken
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

        if (!user) {
            return {
                status: 404,
                message: "USER_NOT_FOUND"
            };
        }
        if (user.isBlocked) {
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
                accessToken
            }
        };

    } catch (error) {

        throw error;

    }
};

const profile = async function (req) {
    try {

        let user = req.user;

        return {
            status: 201,
            message: "USER_PROFILE_LOADED_SUCCESSFULLY",
            data: {
                user: user
            }
        };

    } catch (error) {

        throw error;

    }
};

const update = async function (req) {
    try {

        let payload = req.body;
        if (payload.password) {
            payload.password = hashSync(payload.password, 10);
        }
        let user = await userModel.findByIdAndUpdate(req.user._id, payload, {
            new: true, 
            projection: {
                password: 0
            }
        });

        return {
            status: 201,
            message: "USER_UPDATED_SUCCESSFULLY",
            data: {
                user: user
            }
        };

    } catch (error) {

        throw error;

    }
};


export { register, login, update, profile };