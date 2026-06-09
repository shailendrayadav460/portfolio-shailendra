"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WorkRedirectPage() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace("/project");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center">
      <div className="animate-pulse text-purple-400 text-lg font-semibold">
        Redirecting to Projects...
      </div>
    </div>
  );
}