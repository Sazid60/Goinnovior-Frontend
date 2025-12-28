import { UserInfo } from "./user.interface";

export interface Client {
  id: string;
  name: string;
  email: string;
  profilePhoto: string;
  contactNumber?: string;
  user: UserInfo;
  createdAt: string;
  updatedAt: string;
}
