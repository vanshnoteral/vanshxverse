import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Minimal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 aesthetic-text">
            Hi, I'm <span className="gradient-text">Vansh</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Full Stack Developer & UI/UX Designer crafting digital experiences that blend creativity with functionality
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="mt-12 animate-bounce-slow">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <ChevronDown className="w-8 h-8 mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}