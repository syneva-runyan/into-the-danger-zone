import { useState } from 'react';
import './App.css';
import Header from './Header';
import ViewProfile from './View';
import EditProfile from './Edit';
import PeopleYouMayKnow from './PeopleYouMayKnow';
import TimedOut from './TimedOut';
import profileInfo from './assets/profileInfo';
import { IdleSessionTimeout } from "idle-session-timeout";

// Time out session after 5 min of inactivity.
let session = new IdleSessionTimeout(60 * 1000 * 5);

function getCurrentView(currentView, setCurrentView, profile, setProfile, profileInfo) {
  const goToProfile = (profileName) => {
    setProfile(profileName);
    setCurrentView('view');
  };

  switch(currentView) {
    case 'view':
      return <ViewProfile profile={profile} />;
    case 'edit':
      return (
        <EditProfile
          profile={profile}
          saveProfile={setProfile}
          goToProfile={() => {setCurrentView('view');}}
        />);
    default:
      return <PeopleYouMayKnow profileInfo={profileInfo} goToProfile={goToProfile} />;
  }
}

function App() {
  const [currentView, setCurrentView] = useState('view');
  const [profile, setProfile] = useState(profileInfo.kenny);
  const [isTimedOut, setIsTimedOut] = useState(false);
  session.onTimeOut = () => {
    // mock a timed out state.
    setIsTimedOut(true);
  };
  session.start();

  return (
    <div className="App">
      <Header setCurrentView={setCurrentView} />
      <main className="App-content">
        {getCurrentView(currentView, setCurrentView, profile, setProfile, profileInfo)}
        {isTimedOut && <TimedOut />}
      </main>
    </div>
  );
}

export default App;
