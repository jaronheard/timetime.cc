"use client";

import { SignInButton, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { AddToCalendarButtonType } from "add-to-calendar-button-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Loader2, Save } from "lucide-react";
import { Button } from "./ui/button";

export function SaveButton(props: AddToCalendarButtonType) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onClick() {
    setIsLoading(true);

    const response = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: props,
      }),
    });

    setIsLoading(false);

    if (!response?.ok) {
      return toast.error("Your event was not saved. Please try again.");
    }

    const event = await response.json();

    // This forces a cache invalidation.
    router.refresh();

    router.push(`/event/${event.id}`);
  }

  return (
    <>
      <SignedIn>
        {isLoading && (
          <Button className="w-full" disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        )}
        {!isLoading && (
          <Button className="w-full" onClick={onClick}>
            <Save className="mr-2 h-4 w-4" /> Save
          </Button>
        )}
      </SignedIn>
      <SignedOut>
        {/* TODO: instead convert from the AddToCalendarButtonProps */}
        <SignInButton
          afterSignInUrl={`${process.env.NEXT_PUBLIC_URL}/new?saveIntent=true`}
          afterSignUpUrl={`${process.env.NEXT_PUBLIC_URL}/onboarding?saveIntent=true`}
        >
          <Button className="w-full">Sign in to save</Button>
        </SignInButton>
      </SignedOut>
    </>
  );
}
