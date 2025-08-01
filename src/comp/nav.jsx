import { Link } from "react-router-dom";
import { CircleHelpIcon, Sun, Moon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const Info = [
  { title: "Overview", to: "/about" },
  { title: "Roadmap", to: "/roadmap" },
  { title: "FAQs", to: "/faq" },
];

export function Nav() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false; //change for default mode
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {/* Home Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      BoardBenchers
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      A modern school management software. Currently in
                      development.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem to="/about" title="About">
                Learn about our mission and what we're building.
              </ListItem>
              <ListItem to="/roadmap" title="Roadmap">
                Features planned and in progress.
              </ListItem>
              <ListItem to="/faq" title="FAQs">
                Common questions about SchoolSoft.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Docs Link */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to="/docs">Documentation</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Contact Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[20vh] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="/contact">Get in Touch</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link to="/support">Support</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Info Dropdown */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Info</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[10vh] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link to="#" className="flex flex-row items-center gap-1">
                    <CircleHelpIcon />
                    Misc
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <button
                    onClick={() => setIsDark((prev) => !prev)}
                    className="flex flex-row w-full items-center gap-1"
                  >
                    {isDark ? <Sun size={16} /> : <Moon size={16} />}
                    <span className="text-sm">
                      {isDark ? "Light" : "Dark"}
                    </span>
                  </button>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Sign Up Button */}
        <NavigationMenuItem>
          <Button
            onClick={() => {
              const el = document.getElementById("signup");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Sign Up
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, to, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={to}>
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="text-muted-foreground text-sm leading-snug line-clamp-2">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
