import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  Heart, 
  AlertCircle,
  CheckCircle 
} from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  supportLevel?: 'low' | 'medium' | 'high';
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm your AI mental health companion. I'm here to listen and provide support. How are you feeling today?",
      timestamp: new Date(),
      supportLevel: 'low'
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: "Thank you for sharing that with me. It sounds like you're going through a challenging time. Would you like to talk about some coping strategies, or would you prefer to book a session with one of our counselors?",
        timestamp: new Date(),
        supportLevel: 'medium'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const getSupportLevelColor = (level?: string) => {
    switch (level) {
      case 'low': return 'bg-success text-success-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'high': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getSupportIcon = (level?: string) => {
    switch (level) {
      case 'low': return CheckCircle;
      case 'medium': return AlertCircle;
      case 'high': return AlertCircle;
      default: return Heart;
    }
  };

  return (
    <section id="chat" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              AI Mental Health Support
            </h2>
            <p className="text-muted-foreground">
              Get immediate support through our AI companion trained in mental health first aid
            </p>
          </div>

          <Card className="shadow-lg border-border/50">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 border-b">
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span>Secure Chat Session</span>
                <Badge variant="secondary" className="ml-auto">
                  <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></div>
                  Online
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => {
                  const SupportIcon = getSupportIcon(message.supportLevel);
                  return (
                    <div
                      key={message.id}
                      className={`flex items-start space-x-3 ${
                        message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-accent text-accent-foreground'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="w-4 h-4" />
                        ) : (
                          <Bot className="w-4 h-4" />
                        )}
                      </div>
                      <div className={`flex-1 max-w-xs lg:max-w-md ${
                        message.type === 'user' ? 'text-right' : ''
                      }`}>
                        <div className={`p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground ml-auto'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                        </div>
                        {message.supportLevel && message.type === 'bot' && (
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge className={`text-xs ${getSupportLevelColor(message.supportLevel)}`}>
                              <SupportIcon className="w-3 h-3 mr-1" />
                              Support Level: {message.supportLevel}
                            </Badge>
                          </div>
                        )}
                        <p className="text-xs text-muted-foreground mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="p-4 border-t bg-muted/30">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Share how you're feeling..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  This chat is completely confidential and encrypted
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <Card className="text-center p-4">
              <Heart className="w-8 h-8 text-accent mx-auto mb-2" />
              <h3 className="font-medium">Emotional Support</h3>
              <p className="text-sm text-muted-foreground">Immediate coping strategies</p>
            </Card>
            <Card className="text-center p-4">
              <AlertCircle className="w-8 h-8 text-warning mx-auto mb-2" />
              <h3 className="font-medium">Crisis Detection</h3>
              <p className="text-sm text-muted-foreground">Automatic professional referral</p>
            </Card>
            <Card className="text-center p-4">
              <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
              <h3 className="font-medium">Follow-up Care</h3>
              <p className="text-sm text-muted-foreground">Continued support tracking</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;