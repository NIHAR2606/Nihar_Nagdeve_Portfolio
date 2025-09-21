import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Database, Users, ExternalLink, Github, Star, GitBranch } from "lucide-react";

const ProjectsSection = () => {
const projects = [
    {
      title: "GST Return Automation Tool",
      description: "Comprehensive automation solution for GST R1 & 3B reconciliation, eliminating repetitive manual checks and significantly improving compliance accuracy for tax processing teams.",
      icon: BarChart3,
      achievements: [
        "Automated GST R1 & 3B reconciliation processes, eliminating manual verification steps",
        "Reduced processing time by 70% through intelligent data extraction and validation",
        "Built intuitive Streamlit application with advanced data processing capabilities",
        "Improved compliance accuracy to 99% through automated validation algorithms",
        "Successfully handles 100+ reconciliation cases monthly with zero errors",
        "Integrated real-time error detection and reporting features"
      ],
      technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Data Processing", "Tax Compliance", "Excel Automation", "PDF Processing"],
      category: "Process Automation",
      impact: "98% Time Reduction",
      github: "https://github.com/NIHAR2606/GSTR1-And-GSTR3B",
      liveDemo: null,
      features: ["Automated Data Extraction", "Real-time Validation", "Error Reporting", "Compliance Tracking"]
    },
    {
      title: "ITGC Automation Tool",
      description: "Advanced automation solution for IT General Controls (ITGC) evidence collection and validation, streamlining audit processes and significantly reducing manual workload for audit teams.",
      icon: TrendingUp,
      achievements: [
        "Developed comprehensive automation for ITGC evidence collection and validation",
        "Processes 50+ control tests per audit cycle with 99% accuracy",
        "Integrated AI-powered scripting to minimize repetitive manual audit tasks",
        "Reduced evidence collection time by 60% through intelligent automation",
        "Achieved 60% faster control testing cycles with enhanced accuracy",
        "Implemented real-time audit trail and documentation features"
      ],
      technologies: ["Python", "Streamlit", "AI Integration", "Audit Automation", "Data Validation", "Report Generation", "Compliance Systems"],
      category: "Audit Technology",
      impact: "60% Efficiency Gain",
      github: "https://github.com/NIHAR2606/ITGC-Tool",
      liveDemo: null,
      features: ["Evidence Collection", "Control Testing", "Automated Reporting", "Compliance Tracking"]
    },
    {
      title: "Private AI Policy Assistant",
      description: "Secure on-premises NLP-based PDF document analyzer using Ollama models, ensuring complete data privacy while providing intelligent document summarization and policy Q&A capabilities.",
      icon: Database,
      achievements: [
        "Built secure on-premises NLP solution using advanced Ollama language models",
        "Ensures 100% data privacy by preventing any external data transmission",
        "Supports intelligent document upload, policy analysis, and natural language queries",
        "Achieved 95% accuracy rate in document analysis and content extraction",
        "Reduced manual policy review effort by 50% through AI-powered summarization",
        "Implemented advanced semantic search and context-aware responses"
      ],
      technologies: ["Python", "Ollama", "NLP", "LangChain", "PDF Processing", "Secure AI", "Document Analysis", "Semantic Search"],
      category: "AI & Machine Learning",
      impact: "50% Review Time Reduction",
      github: "https://github.com/NIHAR2606/PDF_Summarizer",
      liveDemo: null,
      features: ["Document Analysis", "Policy Q&A", "Secure Processing", "Semantic Search"]
    },
    {
      title: "Anomaly Detection System",
      description: "Machine learning-powered anomaly detection system for financial transactions, utilizing advanced statistical methods and ML algorithms to identify suspicious patterns and potential fraud.",
      icon: ExternalLink,
      achievements: [
        "Built robust anomaly detection system using ensemble machine learning methods",
        "Implemented statistical outlier detection with 98% accuracy in fraud identification",
        "Processed and analyzed 50,000+ financial transactions for pattern recognition",
        "Reduced false positives by 40% through advanced feature engineering",
        "Created real-time monitoring dashboard with automated alert system",
        "Integrated multiple detection algorithms for comprehensive fraud prevention"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Statistical Analysis", "Fraud Detection", "Data Mining"],
      category: "Machine Learning",
      impact: "70% Fraud Detection",
      github: "https://github.com/NIHAR2606/Anomaly-Detection",
      liveDemo: null,
      features: ["Real-time Monitoring", "ML Algorithms", "Pattern Recognition", "Automated Alerts"]
    },
    {
      title: "Sales Analysis (SQL + ML + Power BI)",
      description: "Comprehensive sales analysis project combining SQL data extraction, machine learning predictions, and interactive Power BI dashboards for actionable business insights.",
      icon: BarChart3,
      achievements: [
        "Integrated SQL database queries with machine learning models for sales forecasting",
        "Created interactive Power BI dashboards with real-time sales metrics",
        "Implemented predictive analytics to forecast sales trends with 92% accuracy",
        "Analyzed multi-dimensional sales data across regions, products, and time periods",
        "Generated automated reports reducing manual reporting time by 80%",
        "Provided actionable insights leading to strategic business decisions"
      ],
      technologies: ["SQL Server", "Python", "Power BI", "Machine Learning", "DAX", "Data Modeling", "Predictive Analytics"],
      category: "Business Intelligence",
      impact: "92% Forecast Accuracy",
      github: "https://github.com/NIHAR2606/Sales-Analysis-SQL-ML-PowerBI",
      liveDemo: null,
      features: ["SQL Integration", "Predictive Modeling", "Interactive Dashboards", "Automated Reports"]
    },
    {
      title: "HR Analytics Dashboard",
      description: "Comprehensive HR analytics solution providing insights into employee performance, retention, and organizational metrics through interactive visualizations.",
      icon: Users,
      achievements: [
        "Developed comprehensive HR analytics dashboard tracking key employee metrics",
        "Analyzed employee performance, retention, and satisfaction data",
        "Implemented predictive models for employee turnover with 85% accuracy",
        "Created automated reporting system for HR management insights",
        "Identified key factors affecting employee retention and satisfaction",
        "Enabled data-driven HR decision making through actionable insights"
      ],
      technologies: ["Power BI", "SQL", "Python", "HR Analytics", "Data Visualization", "Statistical Analysis"],
      category: "People Analytics",
      impact: "85% Turnover Prediction",
      github: "https://github.com/NIHAR2606/HR-Analytics-Dashboard",
      liveDemo: null,
      features: ["Performance Tracking", "Retention Analysis", "Satisfaction Metrics", "Predictive Insights"]
    },
    {
      title: "A/B Testing Marketing",
      description: "Statistical analysis framework for marketing A/B testing, providing robust methodologies for campaign optimization and conversion rate improvement.",
      icon: TrendingUp,
      achievements: [
        "Designed and implemented A/B testing framework for marketing campaigns",
        "Applied statistical significance testing and confidence interval analysis",
        "Optimized conversion rates through systematic testing methodologies",
        "Analyzed campaign performance across multiple channels and segments",
        "Provided statistical validation for marketing strategy decisions",
        "Improved campaign ROI through data-driven optimization"
      ],
      technologies: ["Python", "Statistical Analysis", "A/B Testing", "Hypothesis Testing", "Marketing Analytics", "Data Science"],
      category: "Marketing Analytics",
      impact: "Campaign Optimization",
      github: "https://github.com/NIHAR2606/A-B-testing-marketing",
      liveDemo: null,
      features: ["Statistical Testing", "Campaign Analysis", "Conversion Optimization", "ROI Tracking"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Projects & Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing impactful data science and analytics projects that demonstrate practical 
              application of technical skills to solve real-world business challenges.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-hover transition-all duration-300 group overflow-hidden">
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-gradient-to-br from-primary/10 to-data-teal/10 rounded-lg group-hover:from-primary/20 group-hover:to-data-teal/20 transition-all duration-300">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2 border-primary/20 text-primary bg-primary/5">
                          {project.category}
                        </Badge>
                        <CardTitle className="text-foreground text-xl mb-1">{project.title}</CardTitle>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            <span>Featured</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitBranch className="w-3 h-3" />
                            <span>Open Source</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4 p-3 bg-success-green/5 rounded-lg border border-success-green/20">
                    <TrendingUp className="w-4 h-4 text-success-green" />
                    <span className="text-success-green font-semibold text-sm">{project.impact}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  
                  {project.features && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 p-2 bg-secondary/30 rounded-md">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-muted-foreground text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2 max-h-32 overflow-y-auto">
                      {project.achievements.slice(0, 4).map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{achievement}</span>
                        </li>
                      ))}
                      {project.achievements.length > 4 && (
                        <li className="text-xs text-muted-foreground/70 ml-4">
                          +{project.achievements.length - 4} more achievements...
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 6).map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-secondary/50 hover:bg-secondary/70 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 6 && (
                        <Badge variant="outline" className="border-dashed">
                          +{project.technologies.length - 6} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="bg-gradient-to-r from-primary to-data-teal hover:from-primary/90 hover:to-data-teal/90 text-primary-foreground flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/20 text-primary hover:bg-primary/5"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* GitHub Profile Link */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 p-6 bg-gradient-card border border-border rounded-xl shadow-card">
              <Github className="w-8 h-8 text-primary" />
              <div className="text-left">
                <div className="font-semibold text-foreground">Explore More Projects</div>
                <div className="text-sm text-muted-foreground">Visit my GitHub profile for additional projects and contributions</div>
              </div>
              <Button 
                variant="outline"
                onClick={() => window.open('https://github.com/NiharNagdev', '_blank')}
                className="ml-4"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                GitHub Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;