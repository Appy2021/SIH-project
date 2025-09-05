import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, BookOpen, Users, BarChart3 } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-foreground">MindBridge</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#chat" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>AI Support</span>
            </a>
            <a href="#booking" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Book Session</span>
            </a>
            <a href="#resources" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
              <BookOpen className="w-4 h-4" />
              <span>Resources</span>
            </a>
            <a href="#community" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
              <Users className="w-4 h-4" />
              <span>Community</span>
            </a>
            <a href="#admin" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
              <BarChart3 className="w-4 h-4" />
              <span>Analytics</span>
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="outline" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;