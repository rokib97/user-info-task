import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  console.log(user);
  useEffect(() => {
    fetch(`https://randomuser.me/api/?uuid=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data.results[0]);
      });
  }, [userId]);

  // tried to implement but could not finish it
  const birthday = new Date(user?.dob?.date);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const today = new Date();
  const timeSpan = birthday - today;
  //milliseconds

  const days = Math.floor(timeSpan / day);

  return (
    <div class="card lg:w-3/6 mx-auto bg-base-100 shadow-xl px-12 mt-12">
      <div class="avatar">
        <div class="w-32  mask mask-hexagon">
          <img src={user?.picture?.large} alt="" />
        </div>
      </div>
      <div class="card-body">
        <h2 class="card-title">Phone Number: {user?.phone}</h2>
      </div>
    </div>
  );
};

export default UserInfo;
