import React from 'react';
import './success.style.css';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';

const Success = ({history}) => {



    return (
        <div className='success-container'>


            <div class="circle__box">
                <div class="circle__wrapper circle__wrapper--right">
                    <div class="circle__whole circle__right"></div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    enableBackground="new 0 0 24 24" id="Layer_1" version={1.0} viewBox="0 0 24 24"
                    xmlSpace="preserve"

                >
                    <polyline className="path" fill="none" points="20,6 9,17 4,12"
                        stroke="#00c853" strokeMiterlimit={10} strokeWidth={2}

                    />
                </svg>
                <div class="circle__wrapper circle__wrapper--left">
                    <div class="circle__whole circle__left"></div>
                </div>
            </div>
            <div className='success-message-container'>
                <span className='success-message-title'>سوالات روانشناسی با موفقیت کامل شد</span>
                <Button style={{fontFamily:'Vazir', marginTop:'26px'}}
                onClick={()=>history.replace('/question')}
                >
                بازگشت به صفحه سوالات
                </Button>

            </div>
        </div>
    )


}


export default withRouter(Success);