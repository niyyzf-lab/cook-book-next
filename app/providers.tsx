// app/providers.tsx
"use client";
import { NextUIProvider } from "@nextui-org/react";

/**
 * NextUI承载体
 * @param param0
 * @returns
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
