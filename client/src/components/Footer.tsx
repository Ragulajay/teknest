import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import logoImage from "@assets/logoo_1763745375827.png";

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    toast({
      title: "Subscribed!",
      description: "You'll receive updates about our latest resources and tips.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoImage}
                alt="TekNest Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-bold font-[Poppins]">TekNest</span>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">
              Empowering students to build exceptional final year projects with expert guidance and support.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="hover-elevate" data-testid="button-linkedin">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover-elevate" data-testid="button-twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover-elevate" data-testid="button-github">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Software Development</li>
              <li className="text-muted-foreground">Hardware Projects</li>
              <li className="text-muted-foreground">IoT Solutions</li>
              <li className="text-muted-foreground">Project Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get project tips and resources delivered to your inbox
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="input-newsletter"
                required
              />
              <Button type="submit" className="w-full" data-testid="button-subscribe">
                Subscribe
              </Button>
            </form>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>teknestinfo@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 93607 55729</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 79049 18374</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-card-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 TekNest. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
