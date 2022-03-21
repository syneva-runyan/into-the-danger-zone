import React from 'react';
import './ProfilePreview.css';
import { Link } from "react-router-dom";

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
            <Link className="profile-preview-cta" to={`./profile/${profile.key}`}>View Profile</Link>
        </div>
    );
};

export default ProfilePreview;
