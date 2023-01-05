import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
// import SignIn from "./components/signIn/SignIn";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase'
import ProtectedRoutes from "./ProtectedRoutes";
import Header from "./components/header/Header";
import { useState } from "react";
import Destination from "./components/destination/Destination";
import Contact from "./components/contact/Contact";
import Search from "./components/search/Search";

function App() {
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      // const uid = user.uid;
      setUser(user)
      console.log(user)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return (
    <div>
      <Header user={user} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoutes user={user} />}>
          <Route path="/destination" element={<Destination />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search/:vahicle" element={<Search />} />
        </Route>

        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signin" element={<SignIn />} /> */}
      </Routes>
    </div>
  );
}

export default App;
