import User from "../models/user.models";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || password) {
      return res
        .status(400)
        .json({ success: false, message: "All Feilds are requried" });
    }
    const userExist = User.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ success: false, message: "user already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    res
      .status(201)
      .json({ success: true, message: "Account Created Successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: true, message: "Register Failed" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || password) {
      return res
        .status(400)
        .json({ success: false, message: "All Feilds are requried" });
    }
    const user = User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "inccorect email or password" });
    }
    const isMatchPassword = bcrypt.compare(password, user.password);
    if (!isMatchPassword) {
      return res
        .status(400)
        .json({ success: false, message: "inccorect email or password" });
    }
    generateToken(res, user, "Welcome Back");
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "login failed" });
  }
};

export { register, login };