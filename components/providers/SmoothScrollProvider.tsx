"use client";

import { useLenis } from "@/hooks/useLenis";

export function SmoothScrollProvider({
  children,
  enabled = true,
}: {
  children: React.ReactNode;
  enabled?: boolean;
}) {
  useLenis(enabled);
  return <>{children}</>;
}
