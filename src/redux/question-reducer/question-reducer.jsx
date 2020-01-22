const category = ['کار', 'مسکن', 'پیشینه روابط', 'جنسی', 'سلامت', 'ظاهر', 'پدر و مادر', 'خانواده های گسترده', 'دوستان', 'حیوانات خانگی',
    'سیاست', 'جامعه', 'کارهای خیریه', 'خدمت سربازی', 'قانون', 'رسانه', 'دین', 'فرهنگ', 'اوقات فراغت', 'تعطیلات و جشن ها', 'سفر و تفریح',
    'آموزش', 'حمل و نقل', 'ارتباطات', 'صرف غذا', 'نقش پذیری جنسی', 'نژاد، قومیت و تفاوت', 'زندگی هر روزه'];
const category2 = ['پرسشنامه اول', 'پرسشنامه دوم', 'پرسشنامه سوم', 'پرسشنامه چهارم', 'پرسشنامه پنجم'];

const QuestionReducer = (state = [category, category2], action) => {

    switch (action.type) {
        case 'SET_QUESTION': return {
            ...state,
            currentUser: action.payload
        }
        default: return state;
    }



};


export default QuestionReducer;