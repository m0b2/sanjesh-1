import React from 'react';
import './pay-receipt.style.css';
import SignIn from '../../pages/sign_in/sign_in.page';



const PayReceipt = ({ username, password, status }) => {

    const [login, setLogin] = React.useState(false);






    if (login) {
        return <SignIn user_name={username} pass_word={password} status={status} />
    }






    return (

        <div id="receipt">


            <div className="login-form">
                <div className="login-heading-container">
                    <h3 className="login-heading" style={{ direction: 'rtl', fontFamily: 'Samim' }}>
                        پرداخت با موفقیت انجام شد</h3>
                </div>
                <p className="login-copy">سامانه تفاهم سنجش</p>

                <div class="receipt">
                    <div class="receipt-list">
                        {/* <div class="receipt-item">
                            <div class="receipt-label">شماره پیگیری</div>
                            <div class="receipt-value">941986</div>
                        </div>
                        <div class="receipt-item">
                            <div class="receipt-label">مبلغ پرداخت</div>
                            <div class="receipt-value">80,000 تومان</div>
                        </div>
                        <div class="receipt-item">
                            <div class="receipt-label">تاریخ پرداخت</div>
                            <div class="receipt-value">98/11/26</div>
                        </div> */}
                        <div class="receipt-item">
                            <div class="receipt-label">نام کاربری</div>
                            <div class="receipt-value">{username}</div>
                        </div>
                        <div class="receipt-item">
                            <div class="receipt-label">کلمه عبور</div>
                            <div class="receipt-value">{password}</div>
                        </div>
                    </div>
                </div>

                <button className="log-in-button" style={{ background: '#0094CC' }}
                    onClick={() => {
                        setLogin(true);
                    }}
                >صفحه ورود</button>
            </div>
        </div>


    )

};



export default PayReceipt;