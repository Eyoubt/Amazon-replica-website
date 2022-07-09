import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Footer from "./Footer";

const promise = loadStripe(
  "pk_test_51LDVi0CRYFs5nE4IeCshDPTToHTBvC3lBizAVW43LeUS8iBbLSP8hmRzMTMnNo1ZQkJO32IQBqVD3ZwyG6LKuYNb00zre6cu9G"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was loggedd in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Checkout />
                <Footer />
              </div>
            }
          />
          <Route
            path="/orders"
            element={
              <div>
                <Header />
                <Orders />
                <Footer />
              </div>
            }
          />
          <Route
            path="/payment"
            element={
              <div>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
                <Footer />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div>
                <Header />

                <Home />
                <Footer />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
