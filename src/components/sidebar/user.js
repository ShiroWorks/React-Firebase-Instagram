/* eslint-disable jsx-a11y/img-redundant-alt */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

export default function User({ username, fullName }) {

  let IMG = '';


  if (username?.split(' ').indexOf('orwell') > -1 ||username?.split(' ').indexOf('dali') > -1 ||username?.split(' ').indexOf('raphael') > -1 ){
    IMG= <img
      className="rounded-full w-16 flex mr-3"
      alt={`${username} profile picture`}
      src={`/images/avatars/${username}.jpg`}
    />

   } else if(username === 'Vili') {
  IMG =  <img
      className="rounded-full w-16 flex mr-3"
      alt={"Vilmos Szabó's profile picture"}
      src="/images/avatars/Vili.jpg"
    /> 
     
     
     } else{
    IMG =   <img
      className="rounded-full w-16 flex mr-3"
      alt={`${username} profile picture`}
      src="/images/avatars/user.png"
    /> 
     }


  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link to={`/p/${username}`} className="grid grid-cols-4 gap-4 mb-6 items-center">
      <div className="flex items-center justify-between col-span-1">
       {IMG}
      </div>
      <div className="col-span-3">
        <p className="font-bold text-sm">{username}</p>
        <p className="text-sm">{fullName}</p>
      </div>
    </Link>
  );
}

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string
};
