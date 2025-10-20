// next.config.ts

// @ts-expect-error - No type definitions available for 'anchor-pki'
import autoCert from "anchor-pki/auto-cert/integrations/next";

const withAutoCert = autoCert({
  enabledEnv: "development", // Enable AutoCert in development environment
});

const nextConfig = {
  // Add any custom Next.js config options here
};

export default withAutoCert(nextConfig);
