import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const allKnowledgeCategories = [
  {
    id: "how-to-guides",
    name: "How-to Guides & Troubleshooting",
    potential: 78,
    subItems: [
      {
        name: "Email Configuration Issues",
        description: "Common email setup and configuration problems across different clients",
        tickets: ["TK-4521", "TK-4567", "TK-4589"]
      },
      {
        name: "VPN Connection Problems",
        description: "Standard VPN connectivity issues and resolution steps",
        tickets: ["TK-4532", "TK-4578", "TK-4601"]
      },
      {
        name: "Printer Setup & Issues",
        description: "Network printer installation and common printing problems",
        tickets: ["TK-4543", "TK-4589", "TK-4612"]
      }
    ]
  },
  {
    id: "policy-procedures",
    name: "Policy & Procedure Inquiries",
    potential: 65,
    subItems: [
      {
        name: "IT Security Policies",
        description: "Questions about password policies, data security, and compliance",
        tickets: ["TK-5234", "TK-5267", "TK-5289"]
      },
      {
        name: "Equipment Usage Guidelines",
        description: "Corporate device usage policies and acceptable use guidelines",
        tickets: ["TK-5245", "TK-5278", "TK-5301"]
      },
      {
        name: "Software Licensing Rules",
        description: "Software usage policies and licensing compliance questions",
        tickets: ["TK-5256", "TK-5289", "TK-5312"]
      }
    ]
  },
  {
    id: "system-status",
    name: "System Status & Outage Information",
    potential: 82,
    subItems: [
      {
        name: "Service Availability Checks",
        description: "Users checking if specific services or systems are operational",
        tickets: ["TK-6123", "TK-6145", "TK-6167"]
      },
      {
        name: "Planned Maintenance Notifications",
        description: "Information about scheduled maintenance windows and impacts",
        tickets: ["TK-6134", "TK-6156", "TK-6178"]
      },
      {
        name: "Known Issue Updates",
        description: "Status updates on ongoing technical issues and resolution timelines",
        tickets: ["TK-6145", "TK-6167", "TK-6189"]
      }
    ]
  },
  {
    id: "software-training",
    name: "Software Training & Tutorials",
    potential: 70,
    subItems: [
      {
        name: "Microsoft Office Suite",
        description: "Basic training and troubleshooting for Word, Excel, PowerPoint",
        tickets: ["TK-7234", "TK-7256", "TK-7278"]
      },
      {
        name: "Business Application Guides",
        description: "Step-by-step guides for CRM, ERP, and other business software",
        tickets: ["TK-7245", "TK-7267", "TK-7289"]
      },
      {
        name: "Collaboration Tools",
        description: "Training on Teams, SharePoint, and other collaboration platforms",
        tickets: ["TK-7256", "TK-7278", "TK-7301"]
      }
    ]
  },
  {
    id: "hardware-documentation",
    name: "Hardware Documentation & Specs",
    potential: 60,
    subItems: [
      {
        name: "Equipment Specifications",
        description: "Hardware specs, compatibility, and technical documentation",
        tickets: ["TK-8123", "TK-8145", "TK-8167"]
      },
      {
        name: "Setup Instructions",
        description: "Hardware installation and configuration guides",
        tickets: ["TK-8134", "TK-8156", "TK-8178"]
      },
      {
        name: "Warranty Information",
        description: "Warranty status, coverage details, and replacement procedures",
        tickets: ["TK-8145", "TK-8167", "TK-8189"]
      }
    ]
  },
  {
    id: "network-documentation",
    name: "Network & Infrastructure Info",
    potential: 55,
    subItems: [
      {
        name: "Network Configuration Details",
        description: "IP ranges, subnet information, and network topology",
        tickets: ["TK-9234", "TK-9256", "TK-9278"]
      },
      {
        name: "Service Dependencies",
        description: "System interdependencies and service relationship maps",
        tickets: ["TK-9245", "TK-9267", "TK-9289"]
      },
      {
        name: "Performance Baselines",
        description: "Network performance metrics and historical data",
        tickets: ["TK-9256", "TK-9278", "TK-9301"]
      }
    ]
  },
  {
    id: "compliance-reporting",
    name: "Compliance & Reporting Queries",
    potential: 50,
    subItems: [
      {
        name: "Audit Requirements",
        description: "Compliance audit procedures and documentation requirements",
        tickets: ["TK-1023", "TK-1045", "TK-1067"]
      },
      {
        name: "Report Generation",
        description: "Automated reporting templates and data export procedures",
        tickets: ["TK-1034", "TK-1056", "TK-1078"]
      },
      {
        name: "Regulatory Standards",
        description: "Industry compliance standards and implementation guidelines",
        tickets: ["TK-1045", "TK-1067", "TK-1089"]
      }
    ]
  },
  {
    id: "vendor-integration",
    name: "Vendor & Third-party Integration",
    potential: 45,
    subItems: [
      {
        name: "API Documentation",
        description: "Third-party API integration guides and troubleshooting",
        tickets: ["TK-1123", "TK-1145", "TK-1167"]
      },
      {
        name: "Vendor Contact Information",
        description: "Support contacts and escalation procedures for vendors",
        tickets: ["TK-1134", "TK-1156", "TK-1178"]
      },
      {
        name: "Service Level Agreements",
        description: "SLA details, response times, and service commitments",
        tickets: ["TK-1145", "TK-1167", "TK-1189"]
      }
    ]
  },
  {
    id: "disaster-recovery",
    name: "Disaster Recovery & Business Continuity",
    potential: 48,
    subItems: [
      {
        name: "Recovery Procedures",
        description: "Step-by-step disaster recovery and backup restoration guides",
        tickets: ["TK-1234", "TK-1256", "TK-1278"]
      },
      {
        name: "Business Continuity Plans",
        description: "Contingency plans and alternative workflow procedures",
        tickets: ["TK-1245", "TK-1267", "TK-1289"]
      },
      {
        name: "Emergency Contacts",
        description: "After-hours support contacts and emergency procedures",
        tickets: ["TK-1256", "TK-1278", "TK-1301"]
      }
    ]
  },
  {
    id: "change-management",
    name: "Change Management & Documentation",
    potential: 42,
    subItems: [
      {
        name: "Change Request Procedures",
        description: "Formal change management process and approval workflows",
        tickets: ["TK-1323", "TK-1345", "TK-1367"]
      },
      {
        name: "Version Control",
        description: "Software version tracking and rollback procedures",
        tickets: ["TK-1334", "TK-1356", "TK-1378"]
      },
      {
        name: "Documentation Standards",
        description: "Guidelines for maintaining and updating technical documentation",
        tickets: ["TK-1345", "TK-1367", "TK-1389"]
      }
    ]
  }
];

export const KnowledgeAutomationDetails = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCategories = showAll ? allKnowledgeCategories : allKnowledgeCategories.slice(0, 3);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Section 3 - Knowledge Automation Details</CardTitle>
        <CardDescription>
          Top categories for automated knowledge delivery and self-service solutions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {displayedCategories.map((category) => (
            <AccordionItem key={category.id} value={category.id}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center justify-between w-full mr-4">
                  <span className="text-left font-medium">{category.name}</span>
                  <Badge variant="secondary" className="ml-auto">
                    {category.potential}% automation potential
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-4">
                  {category.subItems.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-muted/30">
                      <h4 className="font-medium text-foreground mb-2">{item.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-muted-foreground">Sample Tickets:</span>
                        {item.tickets.map((ticket, ticketIndex) => (
                          <Badge key={ticketIndex} variant="outline" className="text-xs">
                            {ticket}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {allKnowledgeCategories.length > 3 && (
          <div className="mt-6 text-center">
            <Button 
              variant="outline" 
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2"
            >
              {showAll ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  See More ({allKnowledgeCategories.length - 3} more categories)
                </>
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};