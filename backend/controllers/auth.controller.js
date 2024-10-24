import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import { setUser } from "../middleware/auth.middleware.js";

export const register = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    // check conditions
    if (!(userName, email, password)) {
      return res.status(405).json({
        success: false,
        message: "All field are required",
      });
    }

    // email exists
    const existsEmail = await User.findOne({ where: { email } });

    if (existsEmail) {
      return res.status(405).json({
        success: false,
        message: "Email is alredy exists",
      });
    }

    // password bcrypt
    const hashPassword = await bcrypt.hash(password, 8);

    // create user
    const user = await User.create({
      userName,
      email,
      password: hashPassword,
    });

    if (!user) {
      return res.status(405).json({
        success: false,
        message: "User is not register, pls try again",
      });
    }

    // generate cookie
    // const token = await jwt.sign(
    //   {
    //     id: user._id,
    //   },
    //   process.env.JWT_SECRET,
    //   {
    //     expiresIn: "2d",
    //   }
    // );

    // res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "User register successfully",
      user,
      //   token,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "User is not register",
      e,
    });
  }
};

// login controllers
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
  
    // Check if user exists
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "2h" }
    );

    // res.cookie("authToken", token);

    res.status(200).json({
      success: true,
      message: "User login successfully",
      token,
    });

  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: "User is not logged in",
      err,
    });
  }
};
