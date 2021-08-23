import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddProductPage from "../components/Admin/AddProductPage";
import EditProductPage from "../components/Admin/EditProductPage";
import SubscribeEmails from "../components/Admin/SubscribeEmails";
import Auth from "../components/Authentication /Auth";
import ForgotPassword from "../components/Authentication /ForgotPassword";
import Cart from "../components/Cart/Cart";
// import Cart from "../components/Cart/Cart";
import Favorites from "../components/Cart/Favorites";

import MailContainer from "../components/Footer/MailContainer";
import Homepage from "../components/Homepage/Homepage";
import Merch from "../components/Merch/Merch";
// import MerchComments from "../components/Merch/MerchComments";
import MerchDetails from "../components/Merch/MerchDetails";

import MainNavbar from "../components/Navbar/Navbar";
import PayForm from "../components/Payment/PayForm";
import TelegramBot from "../components/TelegramBot/TelegramBot";
import TopChat from "../components/TopChat/TopChat";
import Tour from "../components/Tour/Tour";
import AuthContextProvider from "../contexts/AuthContextProvider";
import ProductContextProvider from "../contexts/ProductContext";

const Routes = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ProductContextProvider>
          <MainNavbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/tour" component={Tour} />
            <Route exact path="/merch" component={Merch} />
            <Route exact path="/merchDetails/:id" component={MerchDetails} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/favorites" component={Favorites} />

            <Route exact path="/chat" component={TopChat} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/forgotPassword" component={ForgotPassword} />
            <Route exact path="/addItem" component={AddProductPage} />
            <Route exact path="/edit/:id" component={EditProductPage} />
            <Route exact path="/mailSubscription" component={MailContainer} />
            <Route exact path="/payform" component={PayForm} />
            <Route exact path="/bot" component={TelegramBot} />
            {/* <Route exact path="/merchComments/:id" component={MerchComments} /> */}
            <Route exact path="/emails" component={SubscribeEmails} />
          </Switch>
        </ProductContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
