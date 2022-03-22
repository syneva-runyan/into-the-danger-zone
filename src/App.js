import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import ViewProfile from './View';
import EditProfile from './Edit';
import PeopleYouMayKnow from './PeopleYouMayKnow';
import TimedOut from './TimedOut';
import { IdleSessionTimeout } from "idle-session-timeout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { getProfileInfo } from './api';

// Time out session after 5 min of inactivity.
let session = new IdleSessionTimeout(1000 * 60 * 5);

function App() {
  const [loggedInUser, setLoggedInUser] = useState('kenny'); // TODO create log ins
  const [profileInfo, setProfileInfo] = useState({});
  const [isTimedOut, setIsTimedOut] = useState(false);
  session.onTimeOut = () => {
    // mock a timed out state.
    setIsTimedOut(true);
  };
  session.start();

  // get profile info on startup
  useEffect(async() => {
    const profileInfoOg = await getProfileInfo();
    setProfileInfo(profileInfoOg);
  }, []);

  const updateProfile = (updatedProfile) => {
    setProfileInfo({
      ...profileInfo,
      [loggedInUser]: updatedProfile,
    })
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="App-content">
          <Routes>
            <Route path="/profile/:profileId" element={<ViewProfile profileInfo={profileInfo} />} />
            <Route
              path="/edit"
              element={
                  <EditProfile
                   profile={profileInfo[loggedInUser]}
                   updateProfile={updateProfile}
                />
              }
            />
            <Route 
              path="/"
              element={<PeopleYouMayKnow profileInfo={profileInfo} />}
            />
        </Routes>
          {isTimedOut && <TimedOut session={session} />}
        </main>
      </div>
    </Router>
  );
}

export default App;
