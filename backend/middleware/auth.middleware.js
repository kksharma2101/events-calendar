import jwt from "jsonwebtoken";
// import User from "../models/userModel.js";

export const userVerify = async (req, res, next) => {
  const token = req.header('Authorization')?.split(" ")[1];
  // console.log(token)
  if (!token) return res.status(401).json({ error: "Unauthorized Token" });

  try {
    // "6Y789HJgldks80jdkn"
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // console.log(payload)
    req.user = payload
    // await User.findByPk(payload.id);;
    
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "Error in userVerify",
      error,
    });
  }
};
