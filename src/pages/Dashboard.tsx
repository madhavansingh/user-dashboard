import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import EventFilters from "@/components/dashboard/EventFilters";
import EventFeed from "@/components/dashboard/EventFeed";
import CampusBuddy from "@/components/dashboard/CampusBuddy";

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader onToggleChatbot={() => setShowChatbot(!showChatbot)} />
      
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">For You</h1>
          <p className="text-muted-foreground">Events personalized by AI based on your interests</p>
        </div>

        <EventFilters 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <EventFeed 
          category={selectedCategory}
          searchQuery={searchQuery}
        />
      </div>

      {showChatbot && <CampusBuddy onClose={() => setShowChatbot(false)} />}
    </div>
  );
};

export default Dashboard;
