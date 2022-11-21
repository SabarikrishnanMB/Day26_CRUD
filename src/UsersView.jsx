import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function UsersView() {
  const params = useParams();
  console.log(params);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(...searchParams);

  const [userData, setUserData ] = useState ({})

  useEffect(() => {
    loadUser();
  }, []);

  let loadUser = async () => {
    try {
      let users = await axios.get(
        `https://6283ca4a38279cef71dc6090.mockapi.io/users/${params.userid}`
      );
      setUserData(users.data);
    } catch (error) {}
  };

  return (
    <>
    <div className="container" style={{color:"black"}}>
      <h2>Name     : {userData.name}</h2>
      <h2>Position : {userData.position}</h2>
      <h2>Office   : {userData.office}</h2>
      <h2>Age      : {userData.age}</h2>
      <h2>StartDate: {userData.startdate}</h2>
      <h2>Salary   : {userData.salary}</h2>
    </div>
    </>
  );
}

export default UsersView;
