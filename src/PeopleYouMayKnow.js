import React from 'react';
import ProfilePreview from './ProfilePreview';

function PeopleYouMayKnow({ profileInfo = {}, goToProfile = () => {} }) {
    return (
        <div className="section">
            <h1 className="section-heading">You may know...</h1>
            {Object.keys(profileInfo).map(name => {
                const onClick= () => goToProfile(profileInfo[name]);
                return <ProfilePreview key={name} profile={{...profileInfo[name], key: name}} onClick={onClick} />;
            })}
        </div>
    );
};

export default PeopleYouMayKnow;
