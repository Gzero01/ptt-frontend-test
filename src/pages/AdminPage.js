import React, { useContext, useState } from "react";
import UserData from "./UserData";
import Input from "../components/Input";
import { AuthContext } from "../App";
import Button from "../components/Button";

const AdminPage = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const { count, setCount } = useContext(AuthContext);
  const [numCount, setNumCount] = useState(0);

  const countSubmit = () => {
    if (!numCount || numCount === 0) {
      return alert("Please enter the number of seats");
    }
    setCount(numCount);
    setNumCount(0);
  };

  return (
    <div>
      <div
        className="
        bg-blue-950  flex flex-col items-center py-10 text-white
      "
      >
        <div className="sm:text-3xl text-xl font-semibold pb-10">Administrator</div>
        <div className="flex justify-center items-center gap-3">
          Set the number of seats:
          <Input
            value={numCount}
            onChange={(e) => setNumCount(parseInt(e.target.value))}
            type="number"
            name="numCount"
            id="numCount"
            placeholder="Seats"
            width="sm:w-[100px] w-[70px]"
          />
        </div>
        <div className="flex justify-center mt-10">
          <Button text="Submit" onClick={() => countSubmit()} />
        </div>
      </div>

      <div className="mt-6">
        <UserData />
      </div>
    </div>
  );
};

export default AdminPage;
