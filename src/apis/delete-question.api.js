import axios from 'axios';



const DeleteQuestion = (question_id, setDeleted, category_id) => {


    const headers = {
        "Content-Type": "application/json",
        Vary: "Authorization",
        'Authorization': `Bearer ${JSON.parse(
            localStorage.getItem("myBeLovedToken")
        )}`
    };

    const data = { _method: 'DELETE' }

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
                    { ...oldState, deleting: false, deleted: true }
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

}


export default DeleteQuestion;