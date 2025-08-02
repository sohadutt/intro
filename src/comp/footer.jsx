import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-background text-foreground mt-12 px-6 py-10 border-t transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Brand Info */}
        <div className="flex flex-col gap-2 max-w-sm">
          <h2 className="text-lg font-semibold">BoardBenchers</h2>
          <p className="text-sm text-muted-foreground">
            A modern school management platform in development — designed to
            simplify and enhance school operations.
          </p>
          <div className="flex gap-2 mt-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Delhi, India</span>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium mb-1">Quick Links</h3>
          <Link to="/about" className="text-sm hover:underline">About</Link>
          <Link to="/roadmap" className="text-sm hover:underline">Roadmap</Link>
          <Link to="/faq" className="text-sm hover:underline">FAQs</Link>
          <Link to="/tos" className="text-sm hover:underline">Terms of Use</Link>
          <Link to="/privacy" className="text-sm hover:underline">Privacy Policy</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium mb-1">Contact</h3>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4" />
            <span>support@BoardBenchers.dev</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4" />
            <span>+91-9876543210</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium mb-1">Connect with us</h3>
          <div className="flex gap-3">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/sohadutt/intro?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} BoardBenchers. All rights reserved.
      </div>
    </footer>
  );
}
