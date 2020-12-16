import React, { useEffect, createContext, useReducer, useContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SignIn from "./components/screens/SignIn";
import SignUp from "./components/screens/SignUp";
import Home from "./components/screens/Home";
import UserDashboard from "./components/screens/UserDashboard";
import Services from "./components/screens/Services";
import Products from "./components/screens/Products";
import HairCare from "./components/screens/HairCare";
import SkinCare from "./components/screens/SkinCare";
import BeardCare from "./components/screens/BeardCare";
import AddHairCare from "./components/screens/AddHairCare";
import AddBeardCare from "./components/screens/AddBeardCare";
import AddSkinCare from "./components/screens/AddSkinCare";
import AddHairService from "./components/screens/AddHairServices";
import AddSkinService from "./components/screens/AddSkinService";
import AddBeardService from "./components/screens/AddBeardServices";
import AddDeal from "./components/screens/AddDeals";
import AdminDashboard from "./components/screens/AdminDashboard";
import Appointment from "./components/screens/Appointment";
import ContactUs from "./components/screens/ContactUs";
import UpdateHairService from "./components/screens/Update services/UpdateHairService";
import UpdateSkinService from "./components/screens/Update services/UpdateSkinService";
import UpdateBeardService from "./components/screens/Update services/UpdateBeardService";
import UpdateDeal from "./components/screens/Update services/UpdateDeal";
import UpdateHairCare from "./components/screens/Update Products/UpdateHairCare";
import UpdateSkinCare from "./components/screens/Update Products/UpdateSkinCare";
import UpdateBeardCare from "./components/screens/Update Products/UpdateBeardCare";
import SendEmail from "./components/screens/SendEmail";
import AddReview from "./components/screens/User Dashboard/AddReview";
import MyReview from "./components/screens/User Dashboard/MyReviews";
import CustomerReviews from "./components/screens/CustomerReviews";
import CustomersDetail from "./components/screens/CustomersDetail";
import CustomersBirthday from "./components/screens/CustomersBirthday";
import MyAppointments from "./components/screens/User Dashboard/MyAppointments";
import AllAppointments from "./components/screens/AllAppointments";
import TodayAppointments from "./components/screens/TodayAppointments";
import { reducer, initialState } from "./reducers/userReducer";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      history.push("/");
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <NavBar />
        <Home />
        <Footer />
      </Route>

      <Route path="/signin">
        <NavBar />
        <SignIn />
        <Footer />
      </Route>

      <Route path="/signup">
        <NavBar />
        <SignUp />
        <Footer />
      </Route>

      <Route path="/services">
        <NavBar />
        <Services />
        <Footer />
      </Route>

      <Route path="/products">
        <NavBar />
        <Products />
        <Footer />
      </Route>

      <Route path="/skincare">
        <NavBar />
        <SkinCare />
        <Footer />
      </Route>

      <Route path="/beardcare">
        <NavBar />
        <BeardCare />
        <Footer />
      </Route>

      <Route path="/haircare">
        <NavBar />
        <HairCare />
        <Footer />
      </Route>

      <Route path="/addskincare">
        <AddSkinCare />
      </Route>

      <Route path="/addbeardcare">
        <AddBeardCare />
      </Route>

      <Route path="/addhaircare">
        <AddHairCare />
      </Route>

      <Route path="/addskinservice">
        <AddSkinService />
      </Route>

      <Route path="/addBeardservice">
        <AddBeardService />
      </Route>

      <Route path="/addhairservice">
        <AddHairService />
      </Route>

      <Route path="/adddeal">
        <AddDeal />
      </Route>

      <Route path="/updatehairservice">
        <UpdateHairService />
      </Route>

      <Route path="/updateskinservice">
        <UpdateSkinService />
      </Route>

      <Route path="/updatebeardservice">
        <UpdateBeardService />
      </Route>

      <Route path="/updatedeal">
        <UpdateDeal />
      </Route>

      <Route path="/updatehaircare">
        <UpdateHairCare />
      </Route>

      <Route path="/updatebeardcare">
        <UpdateBeardCare />
      </Route>

      <Route path="/updateskincare">
        <UpdateSkinCare />
      </Route>

      <Route path="/userdashboard">
        <UserDashboard />
      </Route>

      <Route path="/admindashboard">
        <AdminDashboard />
      </Route>

      <Route path="/appointment">
        <NavBar />
        <Appointment />
        <Footer />
      </Route>

      <Route path="/sendemail">
        <SendEmail />
      </Route>

      <Route path="/addreview">
        <AddReview />
      </Route>

      <Route path="/myreview">
        <MyReview />
      </Route>
      <Route path="/customerreviews">
        <CustomerReviews />
      </Route>

      <Route path="/customersdetail">
        <CustomersDetail />
      </Route>

      <Route path="/customersbirthday">
        <CustomersBirthday />
      </Route>

      <Route path="/myappointments">
        <MyAppointments />
      </Route>

      <Route path="/allappointments">
        <AllAppointments />
      </Route>

      <Route path="/todayappointments">
        <TodayAppointments />
      </Route>

      <Route path="/contactus">
        <NavBar />
        <ContactUs />
        <Footer />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
