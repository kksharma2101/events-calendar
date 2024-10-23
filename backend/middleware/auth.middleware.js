import jwt from "jsonwebtoken";

export const setUser = async (user) => {
    try {
        return jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET_KEY, {expiresIn: "2h"})
    } catch (error) {
        console.log("Token is not generate",error)
    }
}

export const userVerify = async (token) => {
if(!token) return null;
  try {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    console.log(error);
  }
};