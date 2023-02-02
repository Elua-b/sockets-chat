import React, { useState, useEffect } from 'react';

const Example = () => {
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    fetch('https://api.multiavatar.com/4645646')
      .then((res) => res.json())
      .then((res) => setAvatar(res.avatar_url))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {avatar ? (
        <img src={avatar} alt="Random Avatar" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Example;