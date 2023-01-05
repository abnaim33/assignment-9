import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
// import SignIn from "./components/signIn/SignIn";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase'

function App() {


  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // const uid = user.uid;
      console.log(user)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
      </Routes>
    </div>
  );
}

export default App;
