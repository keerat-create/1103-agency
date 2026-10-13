import Image from "next/image";

/** Serve the supplied JPG as-is, including its original white canvas. */
export function BrandLogo({ size = 132 }: { size?: number }) {
  return <Image src="/brand/1103-logo.jpg" width={1500} height={1500} style={{ width: size, height: size }} alt="1103 Agency" unoptimized />;
}
