"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";

export function OzNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <FloatingNav navItems={navItems} />
    </div>
  );
}