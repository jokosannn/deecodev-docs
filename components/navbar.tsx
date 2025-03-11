import React from "react";
import { ModeToggle } from "./mode-toggel";
import MaxWidthWrapper from "./max-width-wrapper";

export function Navbar() {
  return (
    <nav className="w-full border-b h-14 sticky top-0 left-0 right-0 bg-background">
      <MaxWidthWrapper className="h-full flex items-center justify-between">
        <div>LOGO</div>
        <ModeToggle />
      </MaxWidthWrapper>
    </nav>
  );
}
