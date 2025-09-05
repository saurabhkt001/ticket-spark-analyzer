import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { DollarSign, TrendingUp, Calendar } from "lucide-react";

// Sample data based on configuration defaults
const roiData = [
  { year: 'Year 1', adoption: 15, tickets: 1800, savings: 36000, cumulative: 36000 },
  { year: 'Year 2', adoption: 35, tickets: 4200, savings: 84000, cumulative: 120000 },
  { year: 'Year 3', adoption: 55, tickets: 6600, savings: 132000, cumulative: 252000 },
  { year: 'Year 4', adoption: 70, tickets: 8400, savings: 168000, cumulative: 420000 },
  { year: 'Year 5', adoption: 85, tickets: 10200, savings: 204000, cumulative: 624000 }
];

const assumptions = {
  totalAnnualTickets: 12000,
  automationPotential: 42,
  avgCostPerTicket: 45,
  maxAnnualSavings: 226800 // 12000 * 0.42 * 45
};

export const ROIAnalysis = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <DollarSign className="h-6 w-6" />
          Section 5 - ROI Analysis
        </CardTitle>
        <CardDescription>
          Projected annual savings based on automation potential and adoption rates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-3xl font-bold text-primary">$624K</div>
            <div className="text-muted-foreground">5-Year Total Savings</div>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-3xl font-bold text-primary">$204K</div>
            <div className="text-muted-foreground">Year 5 Annual Savings</div>
          </div>
          <div className="text-center p-4 bg-muted rounded-lg">
            <div className="text-3xl font-bold text-primary">10,200</div>
            <div className="text-muted-foreground">Tickets Automated (Year 5)</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Annual Savings Projection
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `$${value / 1000}K`} />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Annual Savings']} />
                <Line 
                  type="monotone" 
                  dataKey="savings" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Adoption Rate & Ticket Volume
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis yAxisId="left" tickFormatter={(value) => `${value}%`} />
                <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${value / 1000}K`} />
                <Tooltip />
                <Bar yAxisId="right" dataKey="tickets" fill="#06b6d4" name="Automated Tickets" />
                <Bar yAxisId="left" dataKey="adoption" fill="#8b5cf6" name="Adoption Rate %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-8 p-6 bg-muted/30 rounded-lg">
          <h4 className="font-semibold mb-4">Key Assumptions</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="font-medium">Annual Tickets:</span>
              <div className="text-muted-foreground">{assumptions.totalAnnualTickets.toLocaleString()}</div>
            </div>
            <div>
              <span className="font-medium">Automation Potential:</span>
              <div className="text-muted-foreground">{assumptions.automationPotential}%</div>
            </div>
            <div>
              <span className="font-medium">Avg Cost/Ticket:</span>
              <div className="text-muted-foreground">${assumptions.avgCostPerTicket}</div>
            </div>
            <div>
              <span className="font-medium">Max Annual Savings:</span>
              <div className="text-muted-foreground">${assumptions.maxAnnualSavings.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};