import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuizzDetail } from "../../services/apiService";
import "./DetailQuizz.scss";
import Question from "./Question";


const DetailQuizz = (props) => {
    const params = useParams();
    const quizzId = params.id;

    const [quizzDetail, setQuizzDetail] = useState({});
    const [dataQuizz, setDataQuizz] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetchDetailQuizz();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quizzId]);

    const fetchDetailQuizz = async () => {
        let res = await getQuizzDetail(quizzId);
        setQuizzDetail(res);
        setDataQuizz(res.questions)
        // console.log(dataQuizz)
        // setUsers(res.participants);
        // setPageCount(res.totalPage);
    }
    const handlePrev = () => {
        if (dataQuizz && index - 1 < 0) {
            return;
        }
        setIndex(index - 1)
    }
    const handleNext = () => {
        if (dataQuizz && dataQuizz.length - 1 > index) {
            setIndex(index + 1)
        }
    }

    return (
        <div className="quizz-container d-flex">
            <div className="left-content">
                <div className="title">
                    Quizz {quizzId}: {quizzDetail.description}
                </div>
                <div className="question">
                    <Question index={index} dataQuizz={dataQuizz && dataQuizz.length > 0 ? dataQuizz[index] : {}}></Question>
                </div>
                <div className="footer d-flex justify-content-center">
                    <button className="btn btn-secondary" onClick={() => handlePrev()}>Previous</button>
                    <button className="btn btn-primary" onClick={() => handleNext()}>Next</button>
                </div>

            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    );
}

export default DetailQuizz;