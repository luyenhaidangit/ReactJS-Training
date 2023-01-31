import { useEffect, useState } from "react";
import { getQuizzsByUser } from "../../services/apiService";
import { useSelector } from 'react-redux';
import Image from "../../assets/img/0a435d1641ddf309b273acd0ef4e0684.jpg"
import "./ListQuizz.scss"

const ListQuizz = (props) => {
    const account = useSelector(state => state.user.account);


    const [quizzs, setQuizzs] = useState([]);

    useEffect(() => {
        fetchQuizzsUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchQuizzsUser = async () => {
        let res = await getQuizzsByUser(account.id);
        console.log(res.quizzs)
        if (res) {
            setQuizzs(res.quizzs)
        } else {
            console.log("Dang nhapj khong hop le")
        }

        // console.log(res)
        // setUsers(res.participants);
        // setPageCount(res.totalPage);
    }



    return (
        <div className="list-quizz d-flex container mt-4">
            {
                quizzs && quizzs.length > 0 &&
                quizzs.map((item, index) => {
                    return (<div key={`quizz-user-${index}`} className="card" style={{ width: "18rem" }
                    }>
                        <img src={Image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Quizz {index + 1}</h5>
                            <p className="card-text">{item.description}</p>
                            <button href="#" className="btn btn-primary">Go somewhere</button>
                        </div>
                    </div>)

                })
            }

            {
                quizzs && quizzs.length === 0 && <h3>User không có bài quizz nào</h3>
            }

        </div>
    );
}

export default ListQuizz;