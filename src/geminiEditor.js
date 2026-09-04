import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "models/gemini-3.5-flash" });

async function updateAddress() {
  const prompt = "Replace 'BHOPAL, MADHYA PRADESH' with 'KAWARDHA, CHHATTISGARH' in the site text.";
  const result = await model.generateContent(prompt);
  const newText = result.response.text();

  // Load index.html
  let html = fs.readFileSync("index.html", "utf8");
  // Replace old address with new one
  html = html.replace("BHOPAL, MADHYA PRADESH", "KAWARDHA, CHHATTISGARH");
  fs.writeFileSync("index.html", html);

  console.log("Address updated successfully!");
}

updateAddress();
