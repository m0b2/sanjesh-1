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


const notification = [
  { from: 'admin', type: 'message', title: 'پیغام', content: 'به پایگاه سنجش تفاهم خوش آمدید', isChecked: null },
  { from: 'system', type: 'request', title: 'درخواست قیاس', content: 'درخواست قیاس شما توسط فلانی پذیرفته شد', isChecked: null },
  { from: 'admin', type: 'analyze', title: 'آنالیز سوالات', content: 'آنالیز سوالات فردی اتمام یافت و اینک در بخش مربوطه در دسترس است ', isChecked: null }
];

const data = [title, subheader, details];

const Notification = () => {
  const MyNotification = notification.map((value, index) => (
    <NotificationCom
      title={value.title}
      subheader={value.content}
      key={`notif${index}`}
      type={value.type}
    />
  ));

  return <div>{MyNotification}</div>;
};

export default Notification;
