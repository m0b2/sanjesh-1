import React, { useState } from 'react';
import './sign_in.style.css';

export default function Sign_in() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const usernameHandleChange = (e) => setUsername(e.target.value);
  const passwordHandleChange = (e) => setPassword(e.target.value);
  return (
    <div id="log-in">
      <form className="login-form">
        <h3 className="login-heading" style={{ direction: 'rtl', fontFamily: 'Samim' }}>همین حالا وارد شوید</h3>
        <p className="login-copy">سامانه تفاهم سنجش</p>
        <div className="field-container -username">
          {(username.length < 1) ? <label htmlFor="demo" style={{ direction: 'rtl', fontFamily: 'Samim' }}>نام کاربری</label> : null}
          <input type="text" name="demo" value={username} onChange={usernameHandleChange} style={{ direction: 'rtl' }} />
        </div>
        <div className="field-container -password">
          {(password.length < 1) ? <label htmlFor="demo" style={{ direction: 'rtl', fontFamily: 'Samim' }}>کلمه عبور</label> : null}

          <input type="password" name="demo" value={password} onChange={passwordHandleChange} style={{ direction: 'rtl' }} />
        </div>
        <button className="log-in-button" type="submit">وارد شوید</button>
        <button className="log-in-button" style={{background:'#0094CC'}} >خرید اشتراک</button>
        <a className="create-account-link" href>بازگردانی کلمه عبور</a>
      </form>
    </div>
  );
}
