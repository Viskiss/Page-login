import { FC } from "react";
import { observer } from "mobx-react-lite";
import Header from "./Header/Header";
import Users from "./Users/Users";

const Profile: FC = () => {
  return (
    <div>
      <Header />
      <Users />
    </div>
  );
};

export default observer(Profile);
