import React from 'react';

const Card = ({name, email, username}) => {

    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/set_set4/bgset_bg2/${username}?size=200x200`} alt='profile pic'/>
            <div>
                <h2>{name}</h2>
                <h3>{username}</h3>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;