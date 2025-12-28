"use client";
import { useState } from "react";
import { Hero } from "./Hero";
import { HeroToggle } from "./HeroToggle";

export type HeroMode = "minimal" | "impact";

export default function HeroSelect() {
  const [mode, setMode] = useState<HeroMode>("impact");

  return (
    <>
      <Hero mode={mode} />
      <HeroToggle mode={mode} setMode={setMode} />
    </>
  );
}
