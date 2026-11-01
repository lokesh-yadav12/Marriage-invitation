import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeddingNavbar from './components/WeddingNavbar';
import WeddingFooter from './components/WeddingFooter';
import HomePage from './pages/HomePage';
import CouplePage from './pages/CouplePage';
import EventsPage from './pages/EventsPage';
import InvitationPage from './pages/InvitationPage';
import VenuePage from './pages/VenuePage';
import CountdownPage from './pages/CountdownPage';
import GalleryPage from './pages/GalleryPage';
import RSVPPage from './pages/RSVPPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <WeddingNavbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/couple/:weddingId" element={<CouplePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/invitation" element={<InvitationPage />} />
            <Route path="/venue" element={<VenuePage />} />
            <Route path="/countdown" element={<CountdownPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/rsvp" element={<RSVPPage />} />
          </Routes>
        </main>
        <WeddingFooter />
      </div>
    </Router>
  );
}

export default App;
