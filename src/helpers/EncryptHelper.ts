// utils/encryption.js
import crypto from "crypto";

const algorithm = "aes-256-cbc";
const secretKey: any = process.env.SECRET_KEY; // simpan ini di .env untuk keamanan
const iv = crypto.randomBytes(16); // inisialisasi vektor untuk membuat setiap enkripsi unik

export function encryptID(text: any) {
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return iv.toString("hex") + ":" + encrypted.toString("hex");
}

export function decryptID(text: any) {
  const textParts = text.split(":");
  const iv = Buffer.from(textParts.shift(), "hex");
  const encryptedText = Buffer.from(textParts.join(":"), "hex");
  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(secretKey),
    iv
  );
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
}
