import jwt from "jsonwebtoken";
import User from "../models/userModel.js";


export const userVerify = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findByPk(payload.id);
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

// export const setUser = async (user) => {
//     try {
//         return jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET_KEY, {expiresIn: "2h"})
//     } catch (error) {
//         console.log("Token is not generate",error)
//     }
// }

// export const userVerify = async (req, res) => {
// // if(!token) return null;
// // console.log(req.headers.cookie)
// const token = req.headers.cookie
//   try {
//      jwt.verify(token, process.env.JWT_SECRET_KEY);
//   } catch (error) {
//     console.log(error);
//   }
// };