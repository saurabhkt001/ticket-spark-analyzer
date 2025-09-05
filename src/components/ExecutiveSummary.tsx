import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const summaryData = [
  { name: 'Task Automation', value: 22, color: '#8b5cf6' },
  { name: 'Knowledge Automation', value: 20, color: '#06b6d4' },
  { name: 'Manual Processing', value: 58, color: '#e5e7eb' }
];

const barData = [
  { category: 'Task Automation', potential: 22 },
  { category: 'Knowledge Automation', potential: 20 },
  { category: 'Total Potential', potential: 42 }
];

export const ExecutiveSummary = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Section 1 - Executive Summary</CardTitle>
        <CardDescription>
          Analysis of 3,500 tickets reveals significant automation opportunities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-3xl font-bold text-primary">3,500</div>
            <div className="text-muted-foreground">Tickets Analyzed</div>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-3xl font-bold text-primary">42%</div>
            <div className="text-muted-foreground">Total Automation Potential</div>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-3xl font-bold text-primary">22% + 20%</div>
            <div className="text-muted-foreground">Task + Knowledge Split</div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-6">Automation Potential Breakdown</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Task Automation</span>
                <span className="text-sm font-medium">22%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-primary h-3 rounded-full" style={{ width: '22%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Knowledge Automation</span>
                <span className="text-sm font-medium">20%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-accent h-3 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Manual Processing</span>
                <span className="text-sm font-medium">58%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-muted-foreground/30 h-3 rounded-full" style={{ width: '58%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};