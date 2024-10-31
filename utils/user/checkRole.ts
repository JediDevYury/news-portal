import { Roles } from "@/types/roles";

export const checkRole = (role: Roles) => ({
  isAdmin: role === Roles.ADMIN,
  isUser: role === Roles.USER,
});
