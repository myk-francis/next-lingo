import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col max-w-[988px] mx-auto w-full lg:flex-row items-center justify-center p-4 gap-2 ">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src={"/hero.svg"} fill alt="Hero" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, practice and master new languanges with Lingo.
        </h1>
        <div>
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <Button size={"lg"} variant={"secondary"}>
                <Link href={"/learn"}>Continue Learning</Link>
              </Button>
            </SignedIn>

            <SignedOut>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/"
              >
                <Button size={"lg"} variant={"secondary"}>
                  Get Started
                </Button>
              </SignUpButton>

              <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/"
              >
                <Button size={"lg"} variant={"primaryOutline"}>
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
