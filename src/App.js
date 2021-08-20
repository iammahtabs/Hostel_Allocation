import './App.css';
import {googleProvider} from "./config/authMethods";
import socialMediaAuth from "./service/auth";
import GoogleButton from 'react-google-button'
import {useState} from 'react';
import Container from "@material-ui/core/Container"

function App() {

  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);

  return user ?  <HostelAllotment user={user} email={email} />: <SignIn setUser={setUser} setEmail={setEmail} />
  
}

function SignIn(props) {
  const {setUser, setEmail} =props;
  const handleOnClick = async(provider) => {
    await socialMediaAuth(provider).then((res) => {
      setUser(res.bc.displayName);
      setEmail(res.bc.email);
    }).catch((er) => {
      return er;
    });
  }

  return (
    <div className="App" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <h1>Hostel Allocation</h1>
      <div>Please Sign:In</div>
      <div>
        <GoogleButton onClick={() => handleOnClick(googleProvider)}/>
      </div>
    </div>
  );
}

function BookRoom(props) {
  const {user, email, gender, hostel} = props;
  const floors = ["1st", "2nd", "3rd", "4th", "5th"];
  const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [room, setRoom] = useState(null);
  let color="lightgreen";
  const [floor, setFloor] = useState("1st Floor");

  return (
    <div>
      <h3>Choose a Floor</h3>
      <select onChange={
        (ev) => {
          if(isNaN(room)){setFloor(ev.target.value);}
        }}>{floors.map((floor) => {return <option key={floor}>{floor} Floor</option>})}</select>
      <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: '1fr 1fr',
        gridGap: '10px',
        height: '90px',
        textAlign: 'center',
        border: '2px solid gray',
        borderRadius: '5px'
        }}
      >{rooms.map((value) => {return <div style={{backgroundColor: color, height: "30px", borderRadius: "5px"}} key={value} onClick={() => {
        if(isNaN(room)) {
          color="gray";
          const info = {user:user, gender:gender, hostel:hostel, room:value, floor: floor, }
          localStorage.setItem(email, JSON.stringify(info));
          setRoom(value);
        }
      }}>{value}</div>})}
      </div>
      {room?<showDetails  />: null}
    </div>
  )
}

function ChooseHostel(props) {
  const {user, email, gender} = props;
  const x = gender==="male"?"B":"G";
  const values = [1, 2, 3, 4, 5, 6];
  const hostels = values.map((i) => x+i);
  const [hostel, setHostel] = useState("");
  
  return (
    <div>
      <h3>Choose A Hostel</h3>
      <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: '1fr 1fr',
        gridGap: '10px',
        height: '60px',
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
      }}
    >{hostels.map((value) => {return <div style={{backgroundColor: "gray", height: "30px", borderRadius: "5px"}} key={value} onClick={() => {
      if(hostel === "") {
        setHostel(value)};
    }}>{value}</div>})}</div>
    {hostel? <BookRoom user={user} email={email} gender={gender} hostel={hostel} />: null}
    </div>
  )
}

function NewUser(props) {
  const [gender, setGender] = useState("");
  const {user, email} = props;

  return (
    <div style={{display: "flex", justifyContent:"space-around", alignItems: "center"}}>
      <div style={{height: "50px", width: "70px",backgroundColor: "lightpink", borderRadius: "10px"}} onClick={() => {
        if(gender === "") setGender("female");
      }}>Girls Hostel</div>
      <div style={{height: "50px", width: "70px", backgroundColor: "lightblue", borderRadius: "10px"}} onClick={() => {
        if(gender === "") setGender("male");
      }}>Boys Hostel</div>
      {gender ? <ChooseHostel user={user} email={email} gender={gender} /> : null}
    </div>
  )
}

function ExistingUser(props)  {
  const {user, email} = props;
  const info = JSON.parse(localStorage.getItem(email));
  return (
    <Container maxWidth="md">
      <div style={{border: "5px solid black",  height: "50vh",width: "70%", borderRadius: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column"}}>
        <h1>Welcome {user}</h1>
        <h3>You have already booked a room</h3>
        <h2>Your room details are as follows</h2>
        <h3>Hostel No <span style={{color: "red"}}>{info.hostel}</span></h3>
        <h3>Room No<span style={{color: "red"}}>{info.room}</span></h3>
      </div>
    </Container>
  );
}

function HostelAllotment(props) {
  const {user, email} = props;
  return (<>
      {localStorage.getItem(email) ? <ExistingUser user={user} email={email} /> : <NewUser user={user} email={email} />}
      </>
  )
}

export default App;
