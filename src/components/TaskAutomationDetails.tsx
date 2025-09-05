import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const taskCategories = [
  {
    id: "password-reset",
    name: "Password Reset & Account Unlock",
    potential: 85,
    subItems: [
      {
        name: "Standard Password Reset",
        description: "Basic password reset requests for domain accounts",
        tickets: ["TK-2341", "TK-2389", "TK-2401"]
      },
      {
        name: "Account Unlock",
        description: "Unlocking locked user accounts due to failed login attempts",
        tickets: ["TK-2356", "TK-2378", "TK-2395"]
      },
      {
        name: "Multi-factor Authentication Reset",
        description: "Resetting MFA tokens and authentication devices",
        tickets: ["TK-2367", "TK-2384", "TK-2402"]
      }
    ]
  },
  {
    id: "software-requests",
    name: "Software Installation Requests",
    potential: 72,
    subItems: [
      {
        name: "Standard Software Catalog",
        description: "Installation of pre-approved software from company catalog",
        tickets: ["TK-1234", "TK-1289", "TK-1301"]
      },
      {
        name: "License Assignment",
        description: "Assigning existing software licenses to users",
        tickets: ["TK-1245", "TK-1298", "TK-1312"]
      },
      {
        name: "Software Updates",
        description: "Routine software version updates and patches",
        tickets: ["TK-1256", "TK-1307", "TK-1323"]
      }
    ]
  },
  {
    id: "access-requests",
    name: "Access & Permission Changes",
    potential: 68,
    subItems: [
      {
        name: "Group Membership",
        description: "Adding/removing users from security groups",
        tickets: ["TK-3421", "TK-3445", "TK-3467"]
      },
      {
        name: "File Share Access",
        description: "Granting access to network file shares and folders",
        tickets: ["TK-3432", "TK-3456", "TK-3478"]
      },
      {
        name: "Application Permissions",
        description: "Modifying user permissions within business applications",
        tickets: ["TK-3443", "TK-3467", "TK-3489"]
      }
    ]
  }
];

export const TaskAutomationDetails = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Section 2 - Task Automation Details</CardTitle>
        <CardDescription>
          Top categories for automated task execution with detailed breakdown
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {taskCategories.map((category) => (
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