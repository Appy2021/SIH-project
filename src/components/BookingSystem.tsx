import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Video, 
  User,
  CheckCircle,
  Shield
} from "lucide-react";

interface Counselor {
  id: string;
  name: string;
  title: string;
  specialization: string[];
  availability: string;
  location: string;
  type: 'in-person' | 'video' | 'phone';
  rating: number;
}

const counselors: Counselor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Martinez',
    title: 'Licensed Clinical Psychologist',
    specialization: ['Anxiety', 'Depression', 'Academic Stress'],
    availability: 'Available Today',
    location: 'Student Counseling Center, Room 205',
    type: 'in-person',
    rating: 4.9
  },
  {
    id: '2',
    name: 'Dr. James Chen',
    title: 'Mental Health Counselor',
    specialization: ['Social Anxiety', 'Relationship Issues', 'Self-Esteem'],
    availability: 'Next available: Tomorrow 2:00 PM',
    location: 'Video Session',
    type: 'video',
    rating: 4.8
  },
  {
    id: '3',
    name: 'Dr. Emily Johnson',
    title: 'Crisis Intervention Specialist',
    specialization: ['Crisis Support', 'Trauma', 'Emergency Care'],
    availability: 'Available 24/7',
    location: 'Phone Consultation',
    type: 'phone',
    rating: 5.0
  }
];

const BookingSystem = () => {
  const [selectedCounselor, setSelectedCounselor] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'phone': return Phone;
      default: return MapPin;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-blue-500';
      case 'phone': return 'bg-green-500';
      default: return 'bg-purple-500';
    }
  };

  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Book Confidential Counseling Session
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Schedule a session with our qualified mental health professionals. 
              All appointments are completely confidential and secure.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Counselor Selection */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Choose Your Counselor
              </h3>
              {counselors.map((counselor) => {
                const TypeIcon = getTypeIcon(counselor.type);
                return (
                  <Card 
                    key={counselor.id}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                      selectedCounselor === counselor.id 
                        ? 'ring-2 ring-primary border-primary/50' 
                        : 'border-border/50'
                    }`}
                    onClick={() => setSelectedCounselor(counselor.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-foreground">{counselor.name}</h4>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <div 
                                  key={i} 
                                  className={`w-3 h-3 rounded-full ${
                                    i < Math.floor(counselor.rating) 
                                      ? 'bg-warning' 
                                      : 'bg-muted'
                                  }`}
                                />
                              ))}
                              <span className="text-sm text-muted-foreground ml-1">
                                {counselor.rating}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{counselor.title}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {counselor.specialization.map((spec, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1 text-success">
                              <Clock className="w-4 h-4" />
                              <span>{counselor.availability}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-muted-foreground">
                              <div className={`w-3 h-3 rounded-full ${getTypeColor(counselor.type)}`} />
                              <TypeIcon className="w-4 h-4" />
                              <span className="capitalize">{counselor.type}</span>
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mt-2">
                            {counselor.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Booking Form */}
            <div>
              <Card className="sticky top-8">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Schedule Appointment</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input 
                        id="date"
                        type="date" 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <select 
                        id="time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full mt-1 p-2 border border-border rounded-md bg-background"
                      >
                        <option value="">Select time slot</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="reason">Reason for Session (Optional)</Label>
                      <textarea 
                        id="reason"
                        placeholder="Brief description to help your counselor prepare..."
                        className="w-full mt-1 p-2 border border-border rounded-md bg-background min-h-[80px] resize-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-2 text-success">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm font-medium">Privacy Guarantee</span>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-success" />
                        <span>Completely confidential</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-success" />
                        <span>No academic record impact</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-success" />
                        <span>Cancel anytime, no questions asked</span>
                      </li>
                    </ul>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                    disabled={!selectedCounselor || !selectedDate || !selectedTime}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Confidential Session
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSystem;