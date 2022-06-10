import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  console.log(user);
  useEffect(() => {
    fetch(`https://randomuser.me/api/?uuid=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
      });
  }, [userId]);
  console.log(user?.dob?.date);

  //   month day year
  const birthday = new Date("01/01/2023");

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  let timerId;

  function countDown() {
    const today = new Date();
    const timeSpan = birthday - today;
    //milliseconds
    console.log(timeSpan);

    if (timeSpan <= -day) {
      console.log("Hope you had a nice Birthday!!");
      clearInterval(timerId);
      return;
    }

    if (timeSpan <= 0) {
      console.log("Happy Birthday!!");
      clearInterval(timerId);
      return;
    }

    const days = Math.floor(timeSpan / day);
    const hours = Math.floor((timeSpan % day) / hour);
    const minutes = Math.floor((timeSpan % hour) / minute);
    const seconds = Math.floor((timeSpan % minute) / second);
  }

  timerId = setInterval(countDown, second);
  return (
    <div class="card lg:w-3/6 mx-auto bg-base-100 shadow-xl px-12 mt-12">
      <div class="avatar">
        <div class="w-32  mask mask-hexagon">
          <img src={user?.picture?.large} alt="" />
        </div>
      </div>
      <div class="card-body">
        <h2 class="card-title">Phone Number: {user?.phone}</h2>
        <p>Birthday Countdown: </p>
      </div>
    </div>
  );
};

export default UserInfo;
