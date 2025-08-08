import { Link } from "react-router-dom";
import { CircleHelpIcon, Sun, Moon, Menu, X } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
    return false;
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <nav>
      {/* Desktop NavigationMenu */}
      <div className="hidden md:block">
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
                    Common questions about the app.
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
                        <span className="text-sm">{isDark ? "Light" : "Dark"}</span>
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
      </div>

      {/* Mobile DropdownMenu */}
      <div className="flex md:hidden items-center justify-between p-2">
        {/* Logo or Brand */}
        <Link to="/" className="text-lg mr-1">
          
        </Link>

        {/* Dropdown menu toggle button */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" sideOffset={5}>
            {/* Home Group */}
            <DropdownMenuLabel>Home</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link to="/">
                  Overview
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/roadmap">Roadmap</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/faq">FAQs</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            {/* Docs */}
            <DropdownMenuItem asChild>
              <Link to="/docs">Documentation</Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Contact */}
            <DropdownMenuLabel>Contact</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link to="/contact">Get in Touch</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/support">Support</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            {/* Info */}
            <DropdownMenuLabel>Info</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link to="#" className="flex items-center gap-1">
                  <CircleHelpIcon size={16} />
                  Misc
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  onClick={() => setIsDark((prev) => !prev)}
                  className="flex items-center gap-2 w-full"
                >
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                  {isDark ? "Light Mode" : "Dark Mode"}
                </button>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            {/* Sign Up */}
            <DropdownMenuItem>
              <Button
                variant="default"
                onClick={() => {
                  const el = document.getElementById("signup");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full"
              >
                Sign Up
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
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
