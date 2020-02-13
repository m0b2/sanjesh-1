import "./notification.style.css";
import Dialog from '../../components/full-screen-dialog/full-screen-dialog.component';
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
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [component, setComponent] = React.useState('');
  const MyNotification = notification.map((value, index) => (

    <NotificationCom
      title={value.title}
      subheader={value.content}
      key={`notif${index}`}
      type={value.type}
      onClick={() => {
        setTitle(value.title);
        setComponent(<span className={'dialog-span-content'}>{value.content}</span>);
        setOpen(true);
      }}
    />

  ));

  return <div>
    {MyNotification}
    <Dialog component={component} title={title} open={open} setOpen={setOpen} />
  </div>;
};

export default Notification;
