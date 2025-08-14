import { useEffect, useState } from "react";
import { deleteUserService, getUsersServices } from "../../services/users";
import { FaUserPlus } from "react-icons/fa";
import UsersTable from "./_components/UsersTable";
import { Link } from "react-router";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const handleGetUsers = async () => {
    try {
      const data = await getUsersServices();
      setUsers(data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const res = await deleteUserService(id) ;
    if (res.status === 200) {
      alert("Done successfully!") ;
      setUsers(users.filter(user => user.id !== id));
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">مدیریت کاربران</h1>
        <Link
          to={"/users/add-user"}
          className="bg-blue-400 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <FaUserPlus />
          <span>افزودن کاربر</span>
        </Link>
      </div>

      <UsersTable users={users} handleDelete = {handleDelete} />
    </div>
  );
};
export default UsersPage;
