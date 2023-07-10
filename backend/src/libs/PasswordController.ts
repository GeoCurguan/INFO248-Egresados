import bcrypt from 'bcryptjs';

export interface PasswordEncrypt {
    encryptPassword(password: string): Promise<string>;
  }
  
export interface PasswordValidate {
    validatePassword(password: string): Promise<boolean>;
  }


export class PasswordController {
  static async encryptPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }

  static async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
