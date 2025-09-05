import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Bot, Book, Workflow, Lightbulb } from "lucide-react";

const taskWorkflows = [
  {
    category: "Password Reset & Account Unlock",
    suggestions: [
      {
        type: "Self-Service Portal",
        description: "Implement automated password reset portal with SMS/email verification",
        impact: "High",
        effort: "Medium"
      },
      {
        type: "Chatbot Integration",
        description: "Deploy chatbot for instant account unlock after identity verification",
        impact: "High",
        effort: "Low"
      }
    ]
  },
  {
    category: "Software Installation Requests",
    suggestions: [
      {
        type: "Automated Deployment",
        description: "Create SCCM/Intune workflows for one-click software installation",
        impact: "High",
        effort: "High"
      },
      {
        type: "Self-Service Catalog",
        description: "Build web-based software catalog with approval workflows",
        impact: "Medium",
        effort: "Medium"
      }
    ]
  },
  {
    category: "Access & Permission Changes",
    suggestions: [
      {
        type: "Role-Based Access Control",
        description: "Implement automated group membership based on job roles",
        impact: "High",
        effort: "High"
      },
      {
        type: "Approval Workflow Engine",
        description: "Create multi-level approval workflows for access requests",
        impact: "Medium",
        effort: "Medium"
      }
    ]
  },
  {
    category: "Hardware & Equipment Requests",
    suggestions: [
      {
        type: "Asset Management Integration",
        description: "Automated inventory tracking and procurement workflows",
        impact: "Medium",
        effort: "High"
      },
      {
        type: "Standard Configuration Packages",
        description: "Pre-configured device images for rapid deployment",
        impact: "High",
        effort: "Medium"
      }
    ]
  },
  {
    category: "Network & Connectivity Issues",
    suggestions: [
      {
        type: "Automated Network Diagnostics",
        description: "Self-running network troubleshooting and repair tools",
        impact: "High",
        effort: "High"
      },
      {
        type: "Zero-Touch VPN Setup",
        description: "Automated VPN configuration based on user profiles",
        impact: "Medium",
        effort: "Medium"
      }
    ]
  },
  {
    category: "Email & Calendar Issues",
    suggestions: [
      {
        type: "Configuration Templates",
        description: "Automated email client setup with organizational policies",
        impact: "High",
        effort: "Low"
      },
      {
        type: "Calendar Bot Assistant",
        description: "AI-powered calendar management and conflict resolution",
        impact: "Medium",
        effort: "High"
      }
    ]
  },
  {
    category: "System Performance & Optimization",
    suggestions: [
      {
        type: "Automated Maintenance Scripts",
        description: "Scheduled system optimization and cleanup routines",
        impact: "Medium",
        effort: "Low"
      },
      {
        type: "Performance Monitoring Alerts",
        description: "Proactive performance issue detection and resolution",
        impact: "High",
        effort: "Medium"
      }
    ]
  },
  {
    category: "Backup & Data Recovery",
    suggestions: [
      {
        type: "Self-Service File Recovery",
        description: "User-accessible backup browsing and file restoration",
        impact: "High",
        effort: "Medium"
      },
      {
        type: "Automated Backup Verification",
        description: "Continuous backup integrity checking and reporting",
        impact: "Medium",
        effort: "Low"
      }
    ]
  },
  {
    category: "Printing & Scanning Services",
    suggestions: [
      {
        type: "Universal Print Drivers",
        description: "Automated printer detection and driver installation",
        impact: "High",
        effort: "Low"
      },
      {
        type: "Print Queue Management Bot",
        description: "Automated print job troubleshooting and queue clearing",
        impact: "Medium",
        effort: "Medium"
      }
    ]
  },
  {
    category: "Security & Compliance",
    suggestions: [
      {
        type: "Automated Security Scanning",
        description: "Continuous security assessment and remediation workflows",
        impact: "High",
        effort: "High"
      },
      {
        type: "Compliance Monitoring Dashboard",
        description: "Real-time compliance tracking and reporting automation",
        impact: "Medium",
        effort: "Medium"
      }
    ]
  }
];

const knowledgeWorkflows = [
  {
    category: "How-to Guides & Troubleshooting",
    suggestions: [
      {
        type: "Interactive Knowledge Base",
        description: "Create step-by-step interactive guides with decision trees",
        impact: "High",
        effort: "Medium"
      },
      {
        type: "AI-Powered Search",
        description: "Implement semantic search across all documentation and tickets",
        impact: "Medium",
        effort: "High"
      }
    ]
  },
  {
    category: "Policy & Procedure Inquiries",
    suggestions: [
      {
        type: "Policy Chatbot",
        description: "AI assistant for instant policy questions and clarifications",
        impact: "High",
        effort: "Medium"
      },
      {
        type: "Interactive Policy Portal",
        description: "Searchable policy database with contextual examples",
        impact: "Medium",
        effort: "Low"
      }
    ]
  },
  {
    category: "System Status & Outage Information",
    suggestions: [
      {
        type: "Real-time Status Dashboard",
        description: "Automated system health monitoring with public status page",
        impact: "High",
        effort: "Low"
      },
      {
        type: "Proactive Notifications",
        description: "Automated alerts and notifications for service disruptions",
        impact: "Medium",
        effort: "Medium"
      }
    ]
  },
  {
    category: "Software Training & Tutorials",
    suggestions: [
      {
        type: "Interactive Learning Modules",
        description: "Hands-on training simulations and guided tutorials",
        impact: "High",
        effort: "High"
      },
      {
        type: "Personalized Learning Paths",
        description: "AI-driven training recommendations based on user roles",
        impact: "Medium",
        effort: "Medium"
      }
    ]
  },
  {
    category: "Hardware Documentation & Specs",
    suggestions: [
      {
        type: "Dynamic Documentation System",
        description: "Auto-updating hardware specs and compatibility matrix",
        impact: "Medium",
        effort: "Medium"
      },
      {
        type: "AR-Powered Setup Guides",
        description: "Augmented reality hardware installation assistance",
        impact: "High",
        effort: "High"
      }
    ]
  },
  {
    category: "Network & Infrastructure Info",
    suggestions: [
      {
        type: "Network Topology Visualizer",
        description: "Interactive network maps with real-time status updates",
        impact: "Medium",
        effort: "High"
      },
      {
        type: "Infrastructure Knowledge Graph",
        description: "AI-powered relationship mapping of IT infrastructure",
        impact: "High",
        effort: "High"
      }
    ]
  },
  {
    category: "Compliance & Reporting Queries",
    suggestions: [
      {
        type: "Automated Report Generation",
        description: "Self-service compliance reporting with customizable templates",
        impact: "High",
        effort: "Medium"
      },
      {
        type: "Compliance Knowledge Assistant",
        description: "AI chatbot for regulatory requirements and guidelines",
        impact: "Medium",
        effort: "Medium"
      }
    ]
  },
  {
    category: "Vendor & Third-party Integration",
    suggestions: [
      {
        type: "Vendor Portal Integration",
        description: "Unified vendor information and support ticket routing",
        impact: "Medium",
        effort: "High"
      },
      {
        type: "API Documentation Hub",
        description: "Centralized, searchable API documentation with examples",
        impact: "High",
        effort: "Low"
      }
    ]
  },
  {
    category: "Disaster Recovery & Business Continuity",
    suggestions: [
      {
        type: "Recovery Procedure Automation",
        description: "Step-by-step guided disaster recovery workflows",
        impact: "High",
        effort: "Medium"
      },
      {
        type: "Emergency Response Assistant",
        description: "AI-powered emergency procedure guidance and escalation",
        impact: "Medium",
        effort: "High"
      }
    ]
  },
  {
    category: "Change Management & Documentation",
    suggestions: [
      {
        type: "Automated Documentation Updates",
        description: "AI-powered documentation maintenance and version control",
        impact: "Medium",
        effort: "High"
      },
      {
        type: "Change Impact Analysis Tool",
        description: "Automated assessment of change request impacts and risks",
        impact: "High",
        effort: "Medium"
      }
    ]
  }
];

const getImpactColor = (impact: string) => {
  switch (impact) {
    case "High": return "destructive";
    case "Medium": return "default";
    case "Low": return "secondary";
    default: return "outline";
  }
};

export const SuggestedWorkflows = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Lightbulb className="h-6 w-6" />
          Section 4 - Suggested Workflows & Knowledge
        </CardTitle>
        <CardDescription>
          Recommended automation implementations for each category and item type
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="task" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="task" className="flex items-center gap-2">
              <Workflow className="h-4 w-4" />
              Task Automation
            </TabsTrigger>
            <TabsTrigger value="knowledge" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              Knowledge Automation
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="task" className="space-y-6">
            {taskWorkflows.map((workflow, index) => (
              <div key={index} className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  {workflow.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {workflow.suggestions.map((suggestion, suggestionIndex) => (
                    <div key={suggestionIndex} className="bg-muted/30 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{suggestion.type}</h4>
                        <div className="flex gap-2">
                          <Badge variant={getImpactColor(suggestion.impact)} className="text-xs">
                            {suggestion.impact} Impact
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {suggestion.effort} Effort
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="knowledge" className="space-y-6">
            {knowledgeWorkflows.map((workflow, index) => (
              <div key={index} className="border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Book className="h-5 w-5 text-primary" />
                  {workflow.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {workflow.suggestions.map((suggestion, suggestionIndex) => (
                    <div key={suggestionIndex} className="bg-muted/30 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{suggestion.type}</h4>
                        <div className="flex gap-2">
                          <Badge variant={getImpactColor(suggestion.impact)} className="text-xs">
                            {suggestion.impact} Impact
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {suggestion.effort} Effort
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};