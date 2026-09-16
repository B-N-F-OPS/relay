import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["googleapis", "google-auth-library"],
};

// export default nextConfig;
module.exports = nextConfig