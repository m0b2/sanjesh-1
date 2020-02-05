import "./notification.style.css";

import React from "react";
import NotificationCom from "../../components/notification/notification.component";

const title = ["پرسشنامه ", "پرسشنامه ", "پرسشنامه ", "پرسشنامه ", "پرسشنامه "];
const subheader = [" اول", " دوم", " سوم", " چهارم", " پنجم"];
const details = [
  "پرسشنامه اول",
  "پرسشنامه دوم",
  "پرسشنامه سوم",
  "پرسشنامه چهارم",
  "پرسشنامه پنجم"
];

const data = [title, subheader, details];

const Notification = () => {
  const MyNotification = data.map((value, subheader, detailsParagraph) => (
    <NotificationCom
      title={value}
      subheader={subheader}
      details={detailsParagraph}
    />
  ));

  return <div>{MyNotification}</div>;
};

export default Notification;
