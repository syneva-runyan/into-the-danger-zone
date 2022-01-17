import { useState } from 'react';
import RTE from './RTE';
import './Edit.css';

function EditProfile({ profile = {}, saveProfile = () => {}, goToProfile }) {
    const [name, setProfileName ] = useState(profile.name);
    const [youtubeChannel, setYoutubeChannel ] = useState(profile.youtubeChannel);
    const [bio, setBio ] = useState(profile.bio);
    const [saved, setSaved ] = useState(false);


    /**
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
    const save = (e) => {
        e.preventDefault();
        saveProfile({
            name,
            image: profile.image,
            youtubeChannel,
            bio,
        });
        setSaved(true);
    }

    const setChannel = (e) => {
        const channel = e.target?.value;
        if(validateYoutubeChannel(channel)) {
            setYoutubeChannel(channel);
        }
    };

    return (
        <div>
            {saved && 
                <p className="saved"> Changes Saved!<br/>
                 <button className={"view-profile"} onClick={goToProfile}>View Profile</button>
                </p>}
        
            <form onSubmit={save}>
                <div className='input-field'>
                    <label htmlFor={'name'}>Name</label>
                    <input id='name' value={name} onChange={(e) => {
                    setProfileName(e.target?.value) }
                    }></input>
                </div>
                <img className="profile-image" src={profile.image} />
                <div className='input-field'>
                    <label htmlFor={'name'}>Youtube Channel</label>
                    <input id='name' value={youtubeChannel} onChange={setChannel}></input>
                </div>
                <div className="bio">
                    <label htmlFor="bio">Bio</label>
                    <RTE id="bio" value={bio} onChange={setBio} />
                </div>

                <button type="submit" className={"save"}>Save</button>
            </form>
        </div>
    );
};

export default EditProfile;
