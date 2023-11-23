import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import Input from "../components/Input";
import { SortIcon } from "../components/Icons";

function UserData() {
  const { auth, setAuth } = useContext(AuthContext);
  const { count, setCount } = useContext(AuthContext);

  // console.log("auth", auth);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [newAuthData, setNewAuthData] = useState(auth);

  useEffect(() => {
    if (auth) {
      setNewAuthData(auth);
    }
  }, [auth]);

  useEffect(() => {
    const searchByFirstname = auth.filter((data) => data.firstname.toLowerCase().includes(firstName.toLowerCase()));
    const searchBylastname = auth.filter((data) => data.lastname.toLowerCase().includes(lastName.toLowerCase()));
    const searchByTel = auth.filter((data) => data.tel.includes(tel));

    if (firstName) {
      setNewAuthData(searchByFirstname);
    } else if (lastName) {
      setNewAuthData(searchBylastname);
    } else if (tel) {
      setNewAuthData(searchByTel);
    } else {
      setNewAuthData(auth);
    }
  }, [firstName, lastName, tel]);

  const SortByFirstname = () => {
    const sortByFirstname = [...newAuthData].sort((a, b) =>
      a.firstname.toLowerCase() > b.firstname.toLowerCase()
        ? 1
        : b.firstname.toLowerCase() > a.firstname.toLowerCase()
        ? -1
        : 0
    );
    setNewAuthData(sortByFirstname);
  };

  const SortBylastname = () => {
    const sortBylastname = [...newAuthData].sort((a, b) =>
      a.lastname.toLowerCase() > b.lastname.toLowerCase()
        ? 1
        : b.lastname.toLowerCase() > a.lastname.toLowerCase()
        ? -1
        : 0
    );
    setNewAuthData(sortBylastname);
  };

  const SortByTel = () => {
    const sortByTel = [...newAuthData].sort((a, b) => (a.tel > b.tel ? 1 : b.tel > a.tel ? -1 : 0));
    setNewAuthData(sortByTel);
  };

  return (
    <div className="max-w-[1300px] mx-auto sm:px-10 px-5 mb-10">
      <div className="flex items-center justify-between">
        <div className="mb-5 text-xl">
          Seats Available: <span className="font-semibold">{count - auth.length}</span>
        </div>{" "}
        <div className="mb-5 text-xl">
          Current Seats: <span className="font-semibold">{auth.length}</span>
        </div>
        <div className="mb-5 text-xl">
          All Seats: <span className="font-semibold">{count}</span>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="sm:text-lg text-base sm:w-[15%] w-[25%]">Search By: </div>
        <Input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Firstname"
          type="text"
          name="firstname"
          id="firstname"
          width="sm:w-[28%] w-[23%]"
        />
        <Input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Lastname"
          type="text"
          name="lastname"
          id="lastname"
          width="sm:w-[28%] w-[23%]"
        />
        <Input
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          placeholder="Tel."
          type="tel"
          name="tel"
          id="tel"
          width="sm:w-[28%] w-[23%]"
        />
      </div>
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="table-auto w-full text-left">
          <thead className="uppercase bg-blue-400">
            <tr>
              <th className="px-6 py-3">
                <div className="flex items-center gap-2">
                  Firstname{" "}
                  <span className="cursor-pointer" onClick={() => SortByFirstname()}>
                    <SortIcon />
                  </span>
                </div>
              </th>
              <th className="px-6 py-3">
                <div className="flex items-center gap-2">
                  Lastname
                  <span className="cursor-pointer" onClick={() => SortBylastname()}>
                    <SortIcon />
                  </span>
                </div>
              </th>
              <th className="px-6 py-3">
                <div className="flex items-center gap-2">
                  Tel.
                  <span className="cursor-pointer" onClick={() => SortByTel()}>
                    <SortIcon />
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {newAuthData.length > 0 ? (
              newAuthData.map((data, index) => (
                <tr className="border-b" key={index}>
                  <td className="px-6 py-4">{data.firstname}</td>
                  <td className="px-6 py-4">{data.lastname}</td>
                  <td className="px-6 py-4">{data.tel}</td>
                </tr>
              ))
            ) : (
              <tr className="border-b">
                <td className="px-6 py-6"></td>
                <td className="px-9 py-6">No Data</td>
                <td className="px-6 py-6"></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserData;
