const baseURL = process.env.config;
const APP_TOKEN = process.env.appToken;

export const loginRequest = async (formData: any) => {
  const res: any = await fetch(`${baseURL}/authenticate/auth/v1/login`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${APP_TOKEN}`,
    },
  });

  return res;
};

export const getUserInfo = async (token: string) => {
  const res: any = await fetch(`${baseURL}/authenticate/auth/v1/myself`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const refreshToken = async (token: string) => {
  const res: any = await fetch(
    `${baseURL}/authenticate/auth/v1/signature/refresh`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res;
};
