import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ExecutiveSummary } from "@/components/ExecutiveSummary";
import { TaskAutomationDetails } from "@/components/TaskAutomationDetails";
import { KnowledgeAutomationDetails } from "@/components/KnowledgeAutomationDetails";
import { SuggestedWorkflows } from "@/components/SuggestedWorkflows";
import { ROIAnalysis } from "@/components/ROIAnalysis";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Automation Analysis Report
              </h1>
              <p className="text-muted-foreground mt-1">TechCorp Solutions</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => navigate('/configuration')}
              className="flex items-center gap-2"
            >
              <Settings className="h-4 w-4" />
              Configuration
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="space-y-8">
          <ExecutiveSummary />
          <TaskAutomationDetails />
          <KnowledgeAutomationDetails />
          <SuggestedWorkflows />
          <ROIAnalysis />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;