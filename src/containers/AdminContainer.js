
import React, { useContext, useEffect, useState } from "react";
import { db } from "../fire";
import { AuthContext } from "../utils/Auth";
import AdminPage from "../components/admin/AdminPage";

export default function AdminContainer() {
  const [userLists, setUserLists] = useState([]);
  const { userData } = useContext(AuthContext);

  function fetchUsers() {
    db.ref()
      .child("users")
      .once(
        "value",
        (snapshot) => {
          const usersObjects = snapshot.val();
          if (usersObjects) {
            setUserLists(Object.values(usersObjects));
          }
        },
        (error) => console.error(error)
      );
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function getUsersExcludedMe() {
    return userLists.filter(
      (user) => user.companyEmail !== userData.companyEmail
    );
  }

  return (
    <div className="admin-container">
      <AdminPage/>
    </div>
  );
}
