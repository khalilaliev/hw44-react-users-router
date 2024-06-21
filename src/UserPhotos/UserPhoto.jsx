import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserPhotoItem from "./UserPhotoItem";

const UserPhoto = () => {
  const { albumId } = useParams();
  console.log(albumId);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getUserPhoto = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
        );
        if (!res.ok) throw new Error("Photos not found");
        const data = await res.json();
        setPhotos(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    getUserPhoto();
  }, [albumId]);
  console.log(photos);
  return (
    <>
      <div className="container">
        <h1 className="text-center text-3xl my-8">Users photos</h1>
        <div className=" flex justify-center  gap-7 flex-wrap">
          <UserPhotoItem photos={photos} />
        </div>
      </div>
    </>
  );
};

export default UserPhoto;
