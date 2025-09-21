import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, BarChart3, Cloud, Brain, Users } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming & Data Science",
      icon: Code,
      skills: ["Python", "R", "Machine Learning", "Deep Learning", "Statistical Analysis"]
    },
    {
      title: "Analytics & Business Intelligence",
      icon: BarChart3,
      skills: ["Power BI", "DAX", "SQL", "Excel", "Data Modelling", "Data Transformation"]
    },
    {
      title: "Automation & Audit",
      icon: Brain,
      skills: ["CaseWare IDEA", "ITGC", "ITAC", "Power Automate", "Process Automation"]
    },
    {
      title: "Specializations",
      icon: Cloud,
      skills: ["Anomaly Detection", "NLP (Document Summarization)", "Business Intelligence"]
    },
    {
      title: "Tools & Platforms",
      icon: Database,
      skills: ["Streamlit", "Ollama", "GitHub", "Microsoft SQL Server"]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem Solving", "Communication", "Teamwork", "Adaptability", "Leadership"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for data analysis, visualization, and machine learning across 
              various platforms and domains.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-hover transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-foreground">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex} 
                        className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;