import { Roles } from "@/types/roles";

export async function getRole() {
  return await new Promise((resolve, reject) => {
    //TODO get role from the server
    const role = "ADMIN";

    if (role) {
      resolve(Roles[role]);
    } else {
      reject("Request failed");
    }
  });
}
