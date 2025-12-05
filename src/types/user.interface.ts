
export type UserRole = "ADMIN" | "USER" | "HOST"

export interface IJWTPayload {
   email: string,
   role: UserRole
}

export interface IUserProfile {
  id: string;
  fullName: string;
  image: string | null;
  bio: string | null;
  interests: string[];
  location: string;
  userId: string;
}

export interface IUser {
  id: string;
  email: string;
  role: UserRole,
  createdAt: string; // ISO Date string
  profile: IUserProfile;
}

