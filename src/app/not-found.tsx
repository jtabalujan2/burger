"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@ui/button";

export default function NotFound({ error }: { error: Error & { digest?: string } }) {
  const router = useRouter();

  const handleButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  useEffect(() => {
    // Log the error to an error reporting service
    // console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="p-6 text-2xl">Something went wrong! Lets go back home!</h1>
      <Button onClick={handleButtonClick} type="button" className="min-w-64 text-xl" size={"lg"}>
        Home
      </Button>
    </div>
  );
}
