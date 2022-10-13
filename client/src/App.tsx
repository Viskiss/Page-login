import { FC, useContext, useEffect } from "react";
import { Context } from ".";
import "./App.css";
import LoginForm from "./components/Login/LoginForm";

import { observer } from "mobx-react-lite";

import Profile from "./components/Profile/Profile";

const App: FC = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, [store]);

  if (store.isLoading) {
    return <div>Loading</div>;
  }

  if (!store.isAuth) {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
  return (
    <div className="App">
      <Profile />
    </div>
  );
};

export default observer(App);
