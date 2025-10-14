import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Heart className="w-5 h-5 text-primary" />
            <p className="text-sm">
              Committed to providing compassionate healthcare
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground mb-2">Dr. Darshan Gautam</p>
            <p>Medical Officer • MBBS, KU • FMGE Qualified</p>
            <p className="mt-2">ACMR Registration No: 31002</p>
          </div>

          <div className="pt-4 border-t border-border w-full max-w-md">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Dr. Darshan Gautam. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;