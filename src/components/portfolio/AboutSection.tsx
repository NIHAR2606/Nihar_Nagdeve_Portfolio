import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Award, Users, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate data analyst with a strong foundation in analytics and machine learning, 
              dedicated to transforming complex data into actionable business insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Professional Summary</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a data analytics professional with expertise in Python, R, Machine Learning, and 
                Business Intelligence. Currently working as a Management Trainee at KKC & Associates LLP, 
                I specialize in automation, audit technologies, and creating data-driven solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My experience includes developing anomaly detection systems, building automated workflows, 
                and creating secure AI solutions for policy analysis. I'm passionate about transforming 
                complex business processes through intelligent automation and data insights.
              </p>
              
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Mumbai, India</span>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-5 h-5 text-success-green" />
                <span>BE Data Science, CGPA: 8.5 (University of Mumbai)</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-card border-border shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Analytics Expertise</h4>
                      <p className="text-sm text-muted-foreground">Statistical Analysis & ML</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Specialized in regression analysis, Bayesian methods, time-series forecasting, 
                    and predictive modeling using Python and R.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-data-teal/10 rounded-lg">
                      <Users className="w-6 h-6 text-data-teal" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Leadership Experience</h4>
                      <p className="text-sm text-muted-foreground">Team Management</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Managed sports committee activities including badminton, volleyball, and cricket 
                    during college, demonstrating leadership and organizational skills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;