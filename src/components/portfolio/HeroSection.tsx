import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown, BarChart3, Database, TrendingUp } from "lucide-react";
import heroImage from "@/assets/dashboard-hero.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-data-teal/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-success-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Background Image with Better Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                  Available for Opportunities
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Nihar Nagdeve
              </h1>
              
              <div className="space-y-3">
                <div className="text-xl md:text-2xl font-semibold text-data-teal">
                  Data Analyst & Automation Specialist
                </div>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Helping businesses automate processes and unlock insights with Data Analytics, Machine Learning, and AI-driven solutions.
                </p>
              </div>
            </div>
            
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary to-data-teal hover:from-primary/80 hover:to-data-teal/80 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-data-teal to-primary hover:from-data-teal/80 hover:to-primary/80 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Nihar_Nagdeve_Resume.pdf';
                  link.download = 'Nihar_Nagdeve_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="bg-gradient-to-r from-success-green to-data-teal hover:from-success-green/80 hover:to-data-teal/80 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                Download Resume
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <span className="text-sm text-muted-foreground">Connect with me:</span>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/nihar-nagdeve-94983524b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/NIHAR2606" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-foreground/10 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:nagdevenihar@gmail.com" 
                  className="p-3 rounded-full bg-muted/30 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 p-4 bg-gradient-card border border-border rounded-xl shadow-card backdrop-blur-sm rotate-[-5deg] hover:rotate-0 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Python</div>
                    <div className="text-xs text-muted-foreground">Data Analysis</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 p-4 bg-gradient-card border border-border rounded-xl shadow-card backdrop-blur-sm rotate-[8deg] hover:rotate-0 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-data-teal/10 rounded-lg">
                    <Database className="w-5 h-5 text-data-teal" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">SQL</div>
                    <div className="text-xs text-muted-foreground">Database</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-8 p-4 bg-gradient-card border border-border rounded-xl shadow-card backdrop-blur-sm rotate-[12deg] hover:rotate-0 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-success-green/10 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-success-green" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Power BI</div>
                    <div className="text-xs text-muted-foreground">Visualization</div>
                  </div>
                </div>
              </div>

              {/* Main Image/Chart Area */}
              <div className="relative p-8 bg-gradient-card border border-border rounded-2xl shadow-hover backdrop-blur-sm">
                <div 
                  className="w-full h-64 rounded-xl opacity-80"
                  style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;