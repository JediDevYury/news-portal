import { CustomLink } from "@/components/ui/link";
import { typography } from "@/constants";

export const LinkExample = () => {
  return (
    <CustomLink style={[typography.buttonLink]} href="/(auth)/sign-up">
      Already have an account?
    </CustomLink>
  );
};
