import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Buffer } from "Buffer";
import './setAvatar.css'
import { setAvatarRoute } from "../../utils/ApiRooute";
const setAvatar = () => {
  const api = `https://api.multiavatar.com/4645646`;
  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  const setProfilePicture = async () => {
    console.log("working");
    if (selectedAvatar === undefined) {
     alert("not selected");
    } else {
      const user = await JSON.parse(
        localStorage.getItem("http://localhost:5000")
      );

      const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
        image: avatars[selectedAvatar],
      });

      if (data.isSet) {
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        localStorage.setItem(
          "http://localhost:5000",
          JSON.stringify(user)
        );
       console.log("doneeee");
      } else {
       console.log("failed try again");
      }
    }
  };
  useEffect(() => {
    const fetchData = async () => {
        
        for(let i = 0; i < 4; i++) {
        try {

          const image = await axios.get(
            `${api}/${Math.round(Math.random() * 1000)}`
            );
            const buffer = new Buffer(image.data);
            const stringFromBuffer = buffer.toString("base64");
            avatars.push(stringFromBuffer)
            setAvatars([...avatars])
            setIsLoading(false)
            
          }catch(error) {
            // throw error
          } finally {
            setIsLoading(false)
          }
        };
      }
    
   
    // setAvatars(data.data);
    // console.log(avatars)
    fetchData();
  }, []);
  // useEffect(() => {console.log(avatars)},[avatars])
  return (
    <>
    {
      isLoading ? (
        <div className="container">
          <img src="./loader.gif" alt="" />
        </div>
      ):(
<div className="container">
      <div className="title-container">
        <h1>Pick an avatar</h1>
      </div>
      <div className="avatars">
        {avatars.map((avatar, index) => {
          return (
            <div
            key={index}
            className={`avatar ${selectedAvatar === index ? "selected" : ""}`}
            
            >
               <img
                    src={`data:image/svg+xml;base64,${avatar}`}
                    alt="avatar"
                    key={avatar}
                    onClick={() => setSelectedAvatar(index)}
                    />
              
            </div>
          );
        })}
      </div>
      <button className="submit-btn" onClick={setProfilePicture}> Set  as Profile Picture</button>
    </div>
      )
    }
    
        </>
  );
};

export default setAvatar;
