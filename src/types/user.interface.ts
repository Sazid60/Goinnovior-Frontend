import { UserRole, UserStatus } from "../lib/auth-utils";
import { IAdmin } from "./admin.interface";
import { Client } from "./client.interface";

export interface UserInfo {
  id: string;
  email: string;
  role: UserRole;          
  status: UserStatus;      
  isVerified: boolean;
  admin?: IAdmin;
  client?: Client;
  createdAt: string;
  updatedAt: string;
}
