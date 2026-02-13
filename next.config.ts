import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `@use "@/src/styles/helpers.scss" as *;`,
  },
};

export default nextConfig;
