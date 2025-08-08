import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Facebook,
  Twitter,
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
          <h2 className="text-lg font-semibold">Partner with Board&Benchers for the Future of Education</h2>
          <p className="text-sm text-muted-foreground">
            We're here to help you transform your school. Get in touch today!
          </p>
          <div className="flex gap-2 mt-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Delhi, India</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium mb-1">Quick Links</h3>
          <Link to="/" className="text-sm hover:underline">Home</Link>
          <Link to="/about" className="text-sm hover:underline">About Us</Link>
          <Link to="/products" className="text-sm hover:underline">Products</Link>
          {/* <Link to="/contact" className="text-sm hover:underline">Contact Us</Link> */}
          <Link to="/blog" className="text-sm hover:underline">Blog</Link>
          <Link to="/careers" className="text-sm hover:underline">Careers</Link>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium mb-1">Legal</h3>
          <Link to="/privacy" className="text-sm hover:underline">Privacy Policy</Link>
          <Link to="/tos" className="text-sm hover:underline">Terms of Service</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium mb-1">Contact Us</h3>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4" />
            <span>+91-7011414973</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4" />
            <span>contact@boardandbenchers.com</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Office Hours: Mon - Fri, 9:00 AM - 6:00 PM IST
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-medium mb-1">Connect with us</h3>
          <div className="flex gap-3">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/sohadutt/intro" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/company/board-benchers/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Board&Benchers. All rights reserved.
      </div>
    </footer>
  );
}
