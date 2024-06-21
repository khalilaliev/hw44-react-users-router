import { Link } from "react-router-dom";
import Button from "../Button/Button";

const UserAlbumItem = ({ album }) => {
  if (!album || album.length === 0)
    return (
      <svg className="spinner-ring" viewBox="25 25 50 50" strokeWidth="5">
        <circle cx="50" cy="50" r="20" />
      </svg>
    );
  return (
    <>
      {album.map((item) => {
        return (
          <div className="card " key={item.id}>
            <div className="card-body">
              <h2 className="card-header">
                {item.id}. {item.title}
              </h2>
              <p className="text-content2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
                nesciunt!
              </p>
              <div className="card-footer">
                <Link to={`/users/${item.userId}/albums/${item.id}/photos`}>
                  <Button text="Photos" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UserAlbumItem;
