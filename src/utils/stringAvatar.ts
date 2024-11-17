import { stringToColor } from "./stringToColor";

export function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      color: "#fff",
      fontSize: "16px"
    },
    children: `${name.split(" ")?.[0]?.[0] || ""}${
      name.split(" ")?.[1]?.[0] || ""
    }`
  };
}
