import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const knowledgeCategories = [
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
  }
];

export const KnowledgeAutomationDetails = () => {
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
          {knowledgeCategories.map((category) => (
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
      </CardContent>
    </Card>
  );
};