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
  if (!text) {
    console.error("Input text is empty");
    return null;
  }

  try {
    // Decode the Base64-encoded text to get the ciphertext
    const decodedCipherText = CryptoJS.enc.Base64.parse(text).toString(
      CryptoJS.enc.Utf8
    );

    // Decrypt the ciphertext
    const bytes = CryptoJS.AES.decrypt(decodedCipherText, secretKey);

    // Convert the decrypted bytes to a UTF-8 string
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

    // Check if decrypted text is empty
    if (!decryptedText) {
      console.error("Decrypted text is empty or invalid");
      return null;
    }

    // Parse the decrypted text as JSON
    return JSON.parse(decryptedText);
  } catch (error) {
    console.error("Decryption failed:", error);
    return null; // Handle the error as needed
  }
}
