"use client";

import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCroppedImageContext } from "@/context/CroppedImageContext";
import { ModeContext, Mode, Status } from "@/context/ModeContext";
import { useNewEventContext } from "@/context/NewEventContext";

export default function ResetNewEventContext() {
  const pathName = usePathname();
  const { setCroppedImagesUrls } = useCroppedImageContext();
  const { setFormData, setEventData } = useNewEventContext();
  const { setStatus, setMode } = useContext(ModeContext);

  useEffect(() => {
    setCroppedImagesUrls({});
    setFormData({
      notes: "",
      visibility: "public",
      lists: [],
    });
    setEventData(undefined);
    setMode(Mode.View);
    setStatus(Status.Organize);
  }, [
    pathName,
    setCroppedImagesUrls,
    setFormData,
    setEventData,
    setMode,
    setStatus,
  ]);

  return null;
}
