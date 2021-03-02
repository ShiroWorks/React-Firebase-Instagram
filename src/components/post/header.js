/* eslint-disable jsx-a11y/img-redundant-alt */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Header({ username }) {

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



  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center">

   




        <Link to={`/p/${username}`} className="flex items-center">
          {IMG}
          <p className="font-bold">{username}</p>
        </Link> 
      </div>
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired
};
