import React, { useState } from "react";
import "reactjs-popup/dist/index.css";

const Details = (props) => {
  const { hostel, room, floor } = props;
  return (
    <div>
      <h1>Success</h1>
      <p>Your Room has been Booked Successfully</p>
      <p>Your room details are as follows:</p>
      <p>
        Hostel No. : <span className="details">{hostel}</span>
      </p>
      <p>
        Room No. : <span className="details">{room}</span>
      </p>
      <p>
        Floor : <span className="details">{floor}</span>
      </p>
    </div>
  );
};

const BookRoom = (props) => {
  const { user, email, gender, hostel } = props;
  const floors = ["1st", "2nd", "3rd", "4th", "5th"];
  const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [room, setRoom] = useState(null);
  const [floor, setFloor] = useState("1st Floor");
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="container">
      <h3>Choose a Floor</h3>
      <select
        onChange={(ev) => {
          if (!localStorage.getItem(email)) setFloor(ev.target.value);
        }}
      >
        {floors.map((floor) => {
          return <option key={floor}>{floor} Floor</option>;
        })}
      </select>
      <div className="rooms">
        {rooms.map((value) => {
          return (
            <div
              className={room === value ? "room opted" : "room"}
              key={value}
              onClick={() => {
                if (!localStorage.getItem(email)) setRoom(value);
              }}
            >
              {value}
            </div>
          );
        })}
      </div>
      {room ? (
        <button
          className="book-room"
          onClick={() => {
            const info = {
              user: user,
              gender: gender,
              hostel: hostel,
              room: room,
              floor: floor,
            };
            localStorage.setItem(email, JSON.stringify(info));
            setShowDetails(true);
          }}
        >
          Book Room
        </button>
      ) : null}
      {showDetails && (
        <Details
          hostel={JSON.parse(localStorage.getItem(email)).hostel}
          room={JSON.parse(localStorage.getItem(email)).room}
          floor={JSON.parse(localStorage.getItem(email)).floor}
        />
      )}
    </div>
  );
};

export default BookRoom;
