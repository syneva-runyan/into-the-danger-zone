import { useState } from 'react';
import RTE from './RTE';
import './Edit.css';
import { setProfileInfo } from './api';

function EditProfile({ profile = {}, updateProfile = () => {}, profileKey }) {
    const [name, setProfileName ] = useState(profile.name);
    const [youtubeChannel, setYoutubeChannel ] = useState(profile.youtubeChannel);
    const [twitter, setTwitter ] = useState(profile.twitter);
    const [instagram, setInstagram ] = useState(profile.instagram);
    const [bio, setBio ] = useState(profile.bio);


    /**
     * An example of what a validation function could look like.
     * Validate provided youtube url before saving
     * @param {string} string 
     */
    const validateYoutubeChannel = (string) => {
        let url;
  
        try {
          url = new URL(string);
        } catch (_) {
          return false;  
        }
      
        // validate https:// protocol
        if(url.protocol !== "https:") {
            return false;
        }

        // validate that youtube link provided
        if (url.host !== 'www.youtube.com') {
            return false;
        }

        return true;

    }



    //** Save profile when form is submitted */
    const save = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { status, updatedProfile } = await setProfileInfo({
            ...profile,
            name,
            youtubeChannel,
            instagram,
            twitter,
            bio
        }, profileKey);
        if (status === 'success') {
            updateProfile(updatedProfile);
            alert("Changes Saved!");
            return;
        }

        // TODO handle error
    }

    const setChannel = (e) => {
        const channel = e.target?.value;
        setYoutubeChannel(channel);
    };

    return (
        <div className="edit">
            <form onSubmit={save}>
                <h1 className="page-title section">Edit Profile</h1>
                <div className="profile-header section edit-basic">
                    <div className="edit-container">
                        <div className="edit-section">
                            <h3>Basic Info</h3>
                            <div className="save-container">
                                <button type="submit" className={"save"}>Save</button>
                            </div>
                        </div>
                        <label htmlFor={'name'}>Profile Picture</label>
                        <div className="edit-image">
                            <button className="upload-img-btn">Upload Image</button>
                            <img className="profile-image" src={profile.image} alt={profile.name} />
                        </div>
                        <div className='input-field'>
                            <label htmlFor={'name'}>Name</label>
                            <input id='name' value={name} onChange={(e) => {
                            setProfileName(e.target?.value) }
                            }></input>
                        </div>
                        <hr className="section-divider" />
                        <div className="edit-section edit-profile-urls">
                            <h3>Social Profiles</h3>
                            <div className="save-container">
                                <button type="submit" className={"save"}>Save</button>
                            </div>
                        </div>
                        <div className='input-field'>
                            <label htmlFor={'youtube'}>Youtube Channel</label>
                            <input id='youtube' value={youtubeChannel} onChange={setChannel}></input>
                        </div>
                        <div className='input-field'>
                            <label htmlFor={'twitter'}>Twitter</label>
                            <input id='twitter' value={twitter} onChange={setTwitter}></input>
                        </div>
                        <div className='input-field'>
                            <label htmlFor={'instagram'}>Instagram</label>
                            <input id='instagram' value={instagram} onChange={setInstagram}></input>
                        </div>
                    </div>
                </div>
                <div className="bio section edit-container">
                    <div className="edit-section">
                        <h3>About</h3>
                        <div className="save-container">
                            <button type="submit" className={"save"}>Save</button>
                        </div>
                    </div>
                    <label htmlFor="bio">Bio</label>
                    <RTE id="bio" value={bio} onChange={setBio} />
                </div>
            </form>
        </div>
    );
};

export default EditProfile;
