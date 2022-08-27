import jwt from "jsonwebtoken";

function Sign(payload) {
    return jwt.sign({ _id: payload._id }, "JWTSECRETKEY", { expiresIn: "1d" });
};

function Verify(token) {
    return jwt.verify(token, "JWTSECRETKEY");
};

const Jwt = { Sign, Verify };
export default Jwt;