import { hashPassword } from './hashPassword';

export const verifyPassword = async (
  password: string,
  hashedPassword: string,
  salt: string,
): Promise<boolean> => {
  const hash = await hashPassword(password, salt);
  return hashedPassword === hash;
};
