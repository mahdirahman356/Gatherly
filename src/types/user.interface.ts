
export type UserRole = "ADMIN" | "USER" | "HOST"

export interface IJWTPayload {
   email: string,
   role: UserRole
}