import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Configuration = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [config, setConfig] = useState({
    totalAnnualTickets: 12000,
    avgCostPerTicket: 45,
    adoptionYear1: 15,
    adoptionYear2: 35,
    adoptionYear3: 55,
    adoptionYear4: 70,
    adoptionYear5: 85
  });

  const handleSave = () => {
    toast({
      title: "Configuration Saved",
      description: "ROI analysis has been updated with new parameters.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Configuration</h1>
              <p className="text-muted-foreground mt-1">ROI Analysis Parameters</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Ticket Volume & Cost</CardTitle>
              <CardDescription>
                Configure annual ticket volume and average handling cost
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="totalTickets">Total Annual Tickets</Label>
                  <Input
                    id="totalTickets"
                    type="number"
                    value={config.totalAnnualTickets}
                    onChange={(e) => setConfig({...config, totalAnnualTickets: parseInt(e.target.value)})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="avgCost">Average Cost per Ticket ($)</Label>
                  <Input
                    id="avgCost"
                    type="number"
                    value={config.avgCostPerTicket}
                    onChange={(e) => setConfig({...config, avgCostPerTicket: parseInt(e.target.value)})}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Adoption Rate by Year (%)</CardTitle>
              <CardDescription>
                Expected automation adoption percentage for each year
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                {[1, 2, 3, 4, 5].map(year => (
                  <div key={year} className="flex items-center gap-4">
                    <Label className="w-20">Year {year}:</Label>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      value={config[`adoptionYear${year}` as keyof typeof config]}
                      onChange={(e) => setConfig({
                        ...config, 
                        [`adoptionYear${year}`]: parseInt(e.target.value)
                      })}
                      className="w-24"
                    />
                    <span className="text-muted-foreground">%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={handleSave} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Save Configuration
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Configuration;