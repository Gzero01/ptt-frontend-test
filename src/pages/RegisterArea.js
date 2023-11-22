import React, { useContext, useState } from "react";
import { AuthContext } from "../App";
import Input from "../components/Input";
import Button from "../components/Button";

const userRegister = { firstname: "thanawat", lastname: "waranon", tel: "0897654857" };

const RegisterArea = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const { count, setCount } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");

  const registerSubmit = () => {
    if (count - auth.length === 0) {
      return alert("There are no seats available");
    }
    if (!firstName || !lastName || !tel) {
      return alert("Please fill all form");
    }

    const update = [...auth];
    update.push({ firstname: firstName, lastname: lastName, tel: tel });

    setAuth(update);
    setFirstName("");
    setLastName("");
    setTel("");
  };

  return (
    <div className="my-10 flex flex-col items-center ">
      <div className="shadow-normal max-w-[500px] rounded-xl w-[70%] p-5 flex flex-col items-center bg-white">
        <div className="sm:text-2xl text-lg font-semibold mb-6">Registration Form</div>
        <div className="flex flex-col gap-5 items-center">
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Firstname"
            type="text"
            name="firstname"
            id="firstname"
          />
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Lastname"
            type="text"
            name="lastname"
            id="lastname"
          />
          <Input
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            placeholder="Tel."
            type="tel"
            name="tel"
            id="tel"
          />
        </div>
        <div className="flex justify-center mt-7">
          <Button text="Submit" onClick={() => registerSubmit()} />
        </div>
      </div>
    </div>
  );
};

export default RegisterArea;
