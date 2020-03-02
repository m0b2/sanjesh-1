import axios from 'axios';


const EditQuestion = (question_id, setDeleted, title, option, category_id) => {



    const headers = {
        "Content-Type": "application/json",
        Vary: "Authorization",
        'Authorization': `Bearer ${JSON.parse(
            localStorage.getItem("myBeLovedToken")
        )}`
    };

    const data = {
        _method: 'PUT',
        category: category_id,
        title,
        answers: option




    }

    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url2 = `http://185.55.226.171/api/questions/${question_id}`;

    axios
        .post(
            url2,
            data,
            {
                headers: headers
            },

        )
        .then(response => {
            //console.log(response)
            setDeleted((oldState) => {

                return (
                    { ...oldState, changed: true, changing: false }
                )
            })

        })
        .catch(error => {
            setDeleted((oldState) => {

                return (
                    { ...oldState, deleting: false, deleted: false }
                )
            })

        });





};




export default EditQuestion;

