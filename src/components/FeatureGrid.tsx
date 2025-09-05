import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Calendar, 
  BookOpen, 
  Users, 
  BarChart3, 
  Lock,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "AI-Guided First Aid",
    description: "Get immediate support through our intelligent chatbot that provides coping strategies and professional referrals when needed.",
    color: "from-blue-500 to-cyan-500",
    href: "#chat"
  },
  {
    icon: Calendar,
    title: "Confidential Booking",
    description: "Schedule appointments with on-campus counselors or mental health helplines through our secure booking system.",
    color: "from-green-500 to-teal-500",
    href: "#booking"
  },
  {
    icon: BookOpen,
    title: "Resource Hub",
    description: "Access videos, relaxation audio, and wellness guides available in multiple regional languages.",
    color: "from-purple-500 to-pink-500",
    href: "#resources"
  },
  {
    icon: Users,
    title: "Peer Support",
    description: "Connect with fellow students in moderated forums facilitated by trained student volunteers.",
    color: "from-orange-500 to-red-500",
    href: "#community"
  },
  {
    icon: BarChart3,
    title: "Admin Dashboard",
    description: "Institutional analytics to help administrators recognize trends and plan effective interventions.",
    color: "from-indigo-500 to-blue-500",
    href: "#admin"
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "All interactions are encrypted and anonymous, ensuring complete privacy and data protection.",
    color: "from-gray-500 to-slate-500",
    href: "#privacy"
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Mental Health Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides multiple pathways to mental wellness, designed specifically 
            for the unique challenges faced by college students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary/80 group"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;