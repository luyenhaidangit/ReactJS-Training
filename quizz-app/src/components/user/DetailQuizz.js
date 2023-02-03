import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getQuizzDetail, postSubmitQuizz } from "../../services/apiService";
import "./DetailQuizz.scss";
import Question from "./Question";
import _ from "lodash"
import ModalResult from "./ModalResult";


const DetailQuizz = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const quizzId = params.id;

    const [quizzDetail, setQuizzDetail] = useState({});
    const [dataQuizz, setDataQuizz] = useState([]);
    const [index, setIndex] = useState(0);

    const [isShowModalResult, setShowModalResult] = useState(false);
    const [dataModalResult, setDataModalResult] = useState({});

    useEffect(() => {
        fetchDetailQuizz();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quizzId]);

    const handleClickAnswer = async (questionId, answerId) => {
        let dataDetailClone = _.cloneDeep(quizzDetail);
        // console.log(dataQuizzClone)
        let question = dataDetailClone.questions.find(item => item.id === questionId);
        // console.log("quesstion", question)
        if (question && question.answers) {
            let questionClone = question.answers.map((item) => {
                if (item.id === answerId) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            })
            // console.log(questionClone)
            question.answers = questionClone;
        }

        // console.log(dataDetailClone)
        // console.log(dataDetailClone)
        let index = dataDetailClone.questions.findIndex(item => item.id === question.id);
        if (index > -1) {
            dataDetailClone.questions[index] = question;

            setQuizzDetail(dataDetailClone);
            setDataQuizz(dataDetailClone.questions)
        }
    }

    const fetchDetailQuizz = async () => {
        let res = await getQuizzDetail(quizzId);
        // console.log(res)
        setQuizzDetail(res);
        res.questions = res.questions.map((item) => {
            item.answers = item.answers.map((answer) => {
                answer.isSelected = false;
                return answer;
            })
            return item;
        })
        // console.log(res.questions)
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

    const handleFinish = async () => {
        let payLoad = {
            quizzId: quizzDetail.id,
            answers: [],
        }
        if (quizzDetail.questions && quizzDetail.questions.length > 0) {
            // setIndex(index + 1)
            quizzDetail.questions.forEach((item) => {
                let answer = {
                    questionId: item.id,
                    userAnswerId: [],
                }
                // console.log(item)
                item.answers.forEach((submitAnswer) => {
                    if (submitAnswer.isSelected === true) {
                        answer.userAnswerId.push(submitAnswer.id);
                    }
                })
                payLoad.answers.push(answer);
                console.log(payLoad)
            })
        }
        let res = await postSubmitQuizz();
        console.log(res);
        if (res) {
            setDataModalResult(res);
            setShowModalResult(true);
        }

        // console.log(quizzDetail)
    }

    return (
        <div className="quizz-container d-flex">
            <div className="left-content">
                <div className="title">
                    Quizz {quizzId}: {quizzDetail.description}
                </div>
                <div className="question">
                    <Question handleClickAnswer={handleClickAnswer} index={index} dataQuizz={dataQuizz && dataQuizz.length > 0 ? dataQuizz[index] : {}}></Question>
                </div>
                <div className="footer d-flex justify-content-center">
                    <button className="btn btn-secondary" onClick={() => handlePrev()}>Previous</button>
                    <button className="btn btn-primary" onClick={() => handleNext()}>Next</button>
                    <button className="btn btn-warning" onClick={() => handleFinish()}>Finish</button>
                </div>

            </div>
            <div className="right-content">
                <button className="btn btn-primary" onClick={() => navigate("/")}>Trở về trang chủ</button>
                count down
            </div>
            <ModalResult show={isShowModalResult} dataModalResult={dataModalResult} setShow={setShowModalResult}></ModalResult>
        </div>
    );
}

export default DetailQuizz;