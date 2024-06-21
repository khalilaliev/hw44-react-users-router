import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserAlbumItem from "./UserAlbumItem";

const UserAlbums = () => {
  const { userId } = useParams();
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    const getUserAlbumData = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
        );
        if (!res.ok) throw new Error("Albums not found");
        const data = await res.json();
        setAlbum(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    getUserAlbumData();
  }, [userId]);
  return (
    <>
      <div className="container">
        <h1 className="text-center text-3xl my-8">Users albums</h1>
        <div className=" flex justify-center  gap-7 flex-wrap">
          <UserAlbumItem album={album} />
        </div>
      </div>
    </>
  );
};

export default UserAlbums;
