/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { updateLoggedInUserFollowing, updateFollowedUserFollowers } from '../../services/firebase';

export default function SuggestedProfile({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId
}) {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    await updateFollowedUserFollowers(profileDocId, userId, false);
  }

  let IMG = '';


  if (username.split(' ').indexOf('orwell') > -1 ||username.split(' ').indexOf('dali') > -1 ||username.split(' ').indexOf('raphael') > -1 ){
    IMG= <img
      className="rounded-full h-8 w-8 flex mr-3"
      alt={`${username} profile picture`}
      src={`/images/avatars/${username}.jpg`}
    />

   } else if(username === 'Vili') {
  IMG =  <img
      className="rounded-full h-8 w-8 flex mr-3"
      alt={"Vilmos Szabó's profile picture"}
      src="/images/avatars/Vili.jpg"
    /> 
     
     
     } else{
    IMG =   <img
      className="rounded-full h-8 w-8 flex mr-3"
      alt={`${username} profile picture`}
      src="/images/avatars/user.png"
    /> 
     }


  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">

      {IMG}
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <button
        className="text-xs font-bold text-blue-medium"
        type="button"
        onClick={handleFollowUser}
      >
        Follow
      </button>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired
};
