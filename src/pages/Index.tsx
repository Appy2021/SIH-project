import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FeatureGrid from "../components/FeatureGrid";
import ChatInterface from "../components/ChatInterface";
import BookingSystem from "../components/BookingSystem";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeatureGrid />
      <ChatInterface />
      <BookingSystem />
    </div>
  );
};

export default Index;
