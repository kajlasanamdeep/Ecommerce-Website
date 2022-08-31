import Jwt from "../helpers/jsonwebtoken";
import userModel from "../models/userModel";

export default function authorize(userType) {
  return async function (req, res, next) {
    if (req.headers.authorization) {
      try {
        let accessToken = req.headers.authorization;
        if (accessToken.startsWith('Bearer')) {
          [, accessToken] = accessToken.split(' ');
        };
        const session = Jwt.Verify(accessToken);
        let user = await userModel.findById(session._id, { password: 0 });
        if (!user || user.userType !== userType) {
          return res.status(403).json({ message: "USER_NOT_ALLOWDED_TO_ACCESS_THIS_PAGE!" });
        }
        req.user = user;
        return next();
      } catch (error) {
        return res.status(403).json({ message: `AUTHORIZATION_ERROR -> ${error.message.toUpperCase()}` });
      }
    }
    else {
      return res.status(401).json({ message: "UNAUTHORIZED_ACCESS!" });
    }
  }
};
