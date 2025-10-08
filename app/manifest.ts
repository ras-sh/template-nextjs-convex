import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ras.sh",
    short_name: "ras.sh",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    theme_color: "#09090b",
    background_color: "#09090b",
    display: "standalone",
  };
}
