import { Roles } from "@/types/roles";

import { useMemo } from "react";

export const useCheckRole = (role: Roles) =>
  useMemo(
    () => ({
      isAdmin: role === Roles.ADMIN,
      isUser: role === Roles.USER,
    }),
    [role],
  );
