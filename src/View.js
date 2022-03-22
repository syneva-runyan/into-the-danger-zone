import React from 'react';
import './View.css';
import { useParams } from "react-router-dom";

function ViewProfile({ profileInfo = {} }) {
    const { profileId } = useParams();
    const profile = profileInfo[profileId] || {}; // TODO when invalid profile id provided.

    return (
        <div>
            <div className="profile-header section">
                <img className="profile-image" src={`/${profile.image}`} alt={profile.name} />
                <div>
                    <h1 className="profile-name">{profile.name}</h1>
                    <div className="profile-links">
                     <a className="profile-youtube profile-link" href={profile.youtubeChannel} >Youtube channel</a>
                     <a className="profile-link profile-twitter" href={profile.youtubeChannel} >Youtube channel</a>
                     <a className="profile-link profile-instagram" href={profile.youtubeChannel} >Youtube channel</a>
                    </div>
                </div>
            </div>
            <div className="bio section">
                <h2 className="section-heading">About</h2>
                <div dangerouslySetInnerHTML={{ '__html': profile.bio}} />
            </div>
        </div>
    );
};

export default ViewProfile;
