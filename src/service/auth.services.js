import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";

import userRepository from "../repositories/user.repositories.js";

function generateJWT(id) {
  return jwt.sign({ id }, process.env.SECRET_JWT, { expiresIn: "24h" });
}

async function loginService(email, password) {
  const user = await userRepository.findUserByEmailRepository(email);
  if (!user) throw new Error("Invalid user!");

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Invalid user!");

  return generateJWT(user.id);
}

export { generateJWT, loginService };
