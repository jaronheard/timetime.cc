"use client";

import { SignedIn, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Edit } from "lucide-react";
import { buttonVariants } from "./ui/button";

type ListEditButtonProps = {
  listUserId: string;
  listId: string;
};

export function ListEditButton(props: ListEditButtonProps) {
  const { user } = useUser();

  const show = user && user.id === props.listUserId;

  if (!show) return null;

  return (
    <SignedIn>
      <Link href={`/list/${props.listId}/edit`} className={buttonVariants()}>
        <Edit className="mr-2 size-4" /> Edit
      </Link>
    </SignedIn>
  );
}
