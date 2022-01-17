import { useState } from 'react';
import './App.css';
import Header from './Header';
import ViewProfile from './View';
import EditProfile from './Edit';
import PeopleYouMayKnow from './PeopleYouMayKnow';
import profileInfo from './assets/profileInfo';

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

  return (
    <div className="App">
      <Header setCurrentView={setCurrentView} />
      <main className="App-content">
        {getCurrentView(currentView, setCurrentView, profile, setProfile, profileInfo)}
      </main>
    </div>
  );
}

export default App;
