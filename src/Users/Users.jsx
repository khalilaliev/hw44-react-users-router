import { useEffect, useState } from "react";
import UserList from "./UsersList";

const Users = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Users not found");
        const data = await res.json();
        setUser(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    getUserData();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center text-3xl my-8">Users</h1>
        <div className=" flex justify-center items-center gap-7 flex-wrap">
          <UserList user={user} />
        </div>
      </div>
    </>
  );
};

export default Users;
