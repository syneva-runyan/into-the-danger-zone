import React from 'react';
import './ProfilePreview.css';

function ProfilePreview({ profile = {}, onClick }) {
    return (
        <div className="profile-preview" onClick={onClick}>
            <div className="profile-preview-info">
                <div className="profile-preview-image" 
                    style={{
                        backgroundImage: `url(${profile.image})`,
                    }}
                />
                <p>{profile.name}</p>
            </div>
            <a className="profile-preview-cta" onClick={onClick} tabIndex={0}>View Profile</a>
        </div>
    );
};

export default ProfilePreview;
