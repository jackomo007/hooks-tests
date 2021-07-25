import React, { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import SongForm from "./Song";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Feuer frei", id: 1 },
    { title: "Moskau", id: 2 },
    { title: "Zeig dich", id: 3 },
  ]);

  const [age, setAge] = useState(18);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuidv1() }]);
  };

  useEffect(() => {
    console.log("song has changed", songs);
  }, [songs]);

  useEffect(() => {
    console.log("age has changed", age);
  }, [age]);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <SongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add +1 to age: {age}</button>
    </div>
  );
};

export default SongList;
