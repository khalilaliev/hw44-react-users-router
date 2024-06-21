import { Link } from "react-router-dom";
import Button from "../Button/Button";

const UserList = ({ user }) => {
  if (!user || user.length === 0)
    return (
      <svg className="spinner-ring" viewBox="25 25 50 50" strokeWidth="5">
        <circle cx="50" cy="50" r="20" />
      </svg>
    );
  return (
    <>
      {user.map((item) => {
        return (
          <div className="card " key={item.id}>
            <div className="card-body">
              <h2 className="card-header">
                {item.id}. {item.name}
              </h2>
              <p className="text-content2">{item.email}</p>
              <p className="text-content2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
                nesciunt!
              </p>
              <div className="card-footer">
                <Link to={`/users/${item.id}/albums`}>
                  <Button text="Albums" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default UserList;
