import { Metadata } from "next";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Suspense } from "react";
import { cookies } from "next/headers";
import Fathom from "@/components/Fathom";
import { CroppedImageProvider } from "@/context/CroppedImageContext";
import { FormProvider } from "@/context/FormContext";
import { VercelToolbar } from "@/components/VercelToolbar";
import { TRPCReactProvider } from "@/trpc/react";

const title = "timetime.cc";
const description = "Create, collect, curate & share events";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  metadataBase: new URL("https://www.timetime.cc/"),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 800,
        height: 400,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TRPCReactProvider cookies={cookies().toString()}>
      <FormProvider>
        <CroppedImageProvider>
          <ClerkProvider>
            <html lang="en">
              <Fathom />
              <body>
                {children}
                <Suspense>
                  <VercelToolbar />
                </Suspense>
              </body>
            </html>
          </ClerkProvider>
        </CroppedImageProvider>
      </FormProvider>
    </TRPCReactProvider>
  );
}
