import { Link, LinkProps } from "expo-router";

export function CustomLink<T extends string | object>(props: LinkProps<T>) {
  return (
    <Link
      suppressHighlighting
      className="text-black active:underline"
      {...props}
    />
  );
}
