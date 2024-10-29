import CryptoJS from "crypto-js";

const secretKey: any = process.env.SECRET_KEY; // simpan ini di .env untuk keamanan

export function encryptID(text: any) {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(text),
    secretKey
  ).toString();
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(ciphertext));
}

export function decryptID(text: any) {
  const decodedCipherText = CryptoJS.enc.Base64.parse(text).toString(
    CryptoJS.enc.Utf8
  );
  const bytes = CryptoJS.AES.decrypt(decodedCipherText, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}
