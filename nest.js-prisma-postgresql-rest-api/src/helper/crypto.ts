const CryptoJS = require("crypto-js");

export const passwordToHash = (password: string) => {
    return CryptoJS.HmacSHA256(
      password,
      CryptoJS.HmacSHA1(password, process.env.PASSWORD_HASH).toString()
    ).toString();
  };
  