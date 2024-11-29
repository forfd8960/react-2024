import HomeCards from "./HomeCards";
import JobListings from "./JobListings";
import Navbar from "./Navbar";

export default function MainPage() {
  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <Navbar />
      <HomeCards />
      <JobListings />
      
    </div>
  );
}
