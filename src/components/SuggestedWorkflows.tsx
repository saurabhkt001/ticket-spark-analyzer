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