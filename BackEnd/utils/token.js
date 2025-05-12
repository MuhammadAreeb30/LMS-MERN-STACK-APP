import jwt from "jsonwebtoken";

const generateToken = (res, user, message) => {
  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  res
    .status(200)
    .cookie("token", token, {
      expires: 60 * 60 * 60 * 1000,
      StrictMode: true,
      httpOnly: true,
    })
    .json({ message, success: true, user });
};

export default generateToken;
