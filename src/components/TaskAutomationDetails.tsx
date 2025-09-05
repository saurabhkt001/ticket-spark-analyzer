import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const allTaskCategories = [
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
  },
  {
    id: "hardware-requests",
    name: "Hardware & Equipment Requests",
    potential: 60,
    subItems: [
      {
        name: "Standard Equipment Orders",
        description: "Ordering pre-approved laptops, monitors, and peripherals",
        tickets: ["TK-4123", "TK-4145", "TK-4167"]
      },
      {
        name: "Asset Replacement",
        description: "Replacing end-of-life or damaged equipment",
        tickets: ["TK-4134", "TK-4156", "TK-4178"]
      },
      {
        name: "Mobile Device Setup",
        description: "Configuring smartphones and tablets for business use",
        tickets: ["TK-4145", "TK-4167", "TK-4189"]
      }
    ]
  },
  {
    id: "network-connectivity",
    name: "Network & Connectivity Issues",
    potential: 55,
    subItems: [
      {
        name: "WiFi Connection Problems",
        description: "Basic wireless connectivity troubleshooting",
        tickets: ["TK-5234", "TK-5256", "TK-5278"]
      },
      {
        name: "Network Drive Mapping",
        description: "Connecting users to shared network resources",
        tickets: ["TK-5245", "TK-5267", "TK-5289"]
      },
      {
        name: "VPN Configuration",
        description: "Setting up remote access connections",
        tickets: ["TK-5256", "TK-5278", "TK-5301"]
      }
    ]
  },
  {
    id: "email-calendar",
    name: "Email & Calendar Issues",
    potential: 58,
    subItems: [
      {
        name: "Email Configuration",
        description: "Setting up email clients and mobile devices",
        tickets: ["TK-6123", "TK-6145", "TK-6167"]
      },
      {
        name: "Calendar Sharing",
        description: "Configuring shared calendars and permissions",
        tickets: ["TK-6134", "TK-6156", "TK-6178"]
      },
      {
        name: "Distribution List Management",
        description: "Adding/removing users from email groups",
        tickets: ["TK-6145", "TK-6167", "TK-6189"]
      }
    ]
  },
  {
    id: "system-performance",
    name: "System Performance & Optimization",
    potential: 45,
    subItems: [
      {
        name: "Disk Cleanup",
        description: "Automated disk space optimization and cleanup",
        tickets: ["TK-7234", "TK-7256", "TK-7278"]
      },
      {
        name: "Startup Optimization",
        description: "Managing startup programs and boot performance",
        tickets: ["TK-7245", "TK-7267", "TK-7289"]
      },
      {
        name: "Memory Management",
        description: "Resolving high memory usage and performance issues",
        tickets: ["TK-7256", "TK-7278", "TK-7301"]
      }
    ]
  },
  {
    id: "backup-recovery",
    name: "Backup & Data Recovery",
    potential: 50,
    subItems: [
      {
        name: "File Recovery",
        description: "Restoring accidentally deleted files from backups",
        tickets: ["TK-8123", "TK-8145", "TK-8167"]
      },
      {
        name: "Backup Configuration",
        description: "Setting up automated backup schedules",
        tickets: ["TK-8134", "TK-8156", "TK-8178"]
      },
      {
        name: "Cloud Sync Issues",
        description: "Resolving OneDrive, SharePoint sync problems",
        tickets: ["TK-8145", "TK-8167", "TK-8189"]
      }
    ]
  },
  {
    id: "printing-scanning",
    name: "Printing & Scanning Services",
    potential: 63,
    subItems: [
      {
        name: "Printer Installation",
        description: "Adding network printers to user workstations",
        tickets: ["TK-9234", "TK-9256", "TK-9278"]
      },
      {
        name: "Print Queue Management",
        description: "Clearing stuck print jobs and queue issues",
        tickets: ["TK-9245", "TK-9267", "TK-9289"]
      },
      {
        name: "Scanner Configuration",
        description: "Setting up scan-to-email and folder functions",
        tickets: ["TK-9256", "TK-9278", "TK-9301"]
      }
    ]
  },
  {
    id: "security-compliance",
    name: "Security & Compliance",
    potential: 40,
    subItems: [
      {
        name: "Antivirus Management",
        description: "Installing and updating security software",
        tickets: ["TK-1023", "TK-1045", "TK-1067"]
      },
      {
        name: "Security Training",
        description: "Providing cybersecurity awareness resources",
        tickets: ["TK-1034", "TK-1056", "TK-1078"]
      },
      {
        name: "Policy Compliance Checks",
        description: "Verifying system compliance with security policies",
        tickets: ["TK-1045", "TK-1067", "TK-1089"]
      }
    ]
  }
];

export const TaskAutomationDetails = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCategories = showAll ? allTaskCategories : allTaskCategories.slice(0, 3);
  
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
        
        {allTaskCategories.length > 3 && (
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
                  See More ({allTaskCategories.length - 3} more categories)
                </>
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};