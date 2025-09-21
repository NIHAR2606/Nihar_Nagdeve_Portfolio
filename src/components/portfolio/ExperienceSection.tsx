import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Management Trainee",
      company: "KKC & Associates LLP",
      period: "April 2025 - Present",
      location: "Mumbai, India",
      type: "Full-Time",
      description: "Leading automation projects and business intelligence initiatives while ensuring compliance with internal and regulatory standards.",
      achievements: [
        "Automated ITGC testing and data extraction workflows using Python & AI (reduced manual efforts by 40%)",
        "Designed Power BI dashboards for audit KPIs and partner-wise reporting with Row Level Security (RLS)",
        "Built an NLP-based PDF summarizer for policy & audit documents, enabling on-premises secure text analysis",
        "Leading projects involving ITGC, ITAC, and process reviews for compliance adherence"
      ],
      skills: ["Python", "Power BI", "ITGC", "ITAC", "NLP", "Process Automation", "RLS"]
    },
    {
      title: "Data Analyst Intern",
      company: "KKC & Associates LLP",
      period: "September 2024 - March 2025",
      location: "Mumbai, India",
      type: "Internship",
      description: "Designed anomaly detection systems and conducted comprehensive audit data analysis using advanced analytics tools.",
      achievements: [
        "Designed an Isolation Forest anomaly detection model (92% accuracy, reduced review time by 70%)",
        "Conducted audit data analysis using SQL, Power BI, Excel, and CaseWare IDEA",
        "Automated recurring validation & reporting tasks via Power Automate",
        "Implemented data-driven solutions for audit efficiency improvements"
      ],
      skills: ["Machine Learning", "SQL", "Power BI", "CaseWare IDEA", "Power Automate", "Anomaly Detection"]
    }
  ];

  const education = {
    degree: "Bachelor of Engineering in Data Science",
    institution: "University of Mumbai (Lokmanya Tilak College of Engineering)",
    period: "August 2020 – May 2024",
    achievement: "CGPA: 8.5",
    location: "Mumbai, India"
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Experience & Education</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional journey combining hands-on industry experience with strong academic foundation 
              in data analytics and machine learning.
            </p>
          </div>
          
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-semibold text-foreground mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="border-primary/20 text-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Education Section */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8 text-foreground">Education</h3>
            <Card className="bg-gradient-card border-border shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6 text-center">
                <h4 className="text-2xl font-semibold text-foreground mb-2">{education.degree}</h4>
                <p className="text-lg text-muted-foreground mb-4">{education.institution}</p>
                <div className="flex items-center justify-center gap-2 text-primary mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{education.period}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-success-green mb-4">
                  <div className="w-2 h-2 bg-success-green rounded-full" />
                  <span className="font-medium">{education.achievement}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{education.location}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;