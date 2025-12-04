
export type UserRole = "ADMIN" | "USER" | "HOST"

export interface IJWTPayload {
   email: string,
   role: UserRole
}

export interface IUser {
  id: number
  name: string
  email: string
//   avatar: string
  joinDate: string
  eventsJoined: number
  eventsHosted: number
  location: string
  status: string
  role: string
}
