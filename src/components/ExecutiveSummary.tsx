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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Automation Potential Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={summaryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {summaryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Automation Categories</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="potential" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
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
      </CardContent>
    </Card>
  );
};