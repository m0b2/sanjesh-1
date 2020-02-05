import React from 'react';
import './answer.page.style.css';
import Options from '../../components/option/option.component';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
const inputs = ['گزینه اول', 'گزینه دوم', 'گزینه سوم', 'گزینه چهارم', 'گزینه پنجم']
const Answer = () => {







    return (
        <div className='question-container'>
            <div className='question-content-container'>
                <span>اگر همسرتان به دلیلی مثل مشکلات مالی یا هر چیز دیگری مدتی طولانی (مثلاً ده سال) به زندان بیفتد تا چه میزان حاضر هستید به خاطر او صبر کنید؟</span>
            </div>
            <Options options={inputs} />
            <Button
                variant="contained"
                color="primary"
                endIcon={<NavigateBeforeIcon />}
            >
                قبلی
      </Button>
            <Button
                variant="contained"
                color="primary"
                startIcon={<NavigateNextIcon />}
            >
                بعدی
      </Button>
        </div>
    )
}





export default Answer;