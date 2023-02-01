import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailQuizz.scss";

const DetailQuizz = (props) => {
    const params = useParams();
    const quizzId = params.id;
    console.log(params)

    useEffect(() => {
        fetchDetailQuizz();
    }, [quizzId]);

    const fetchDetailQuizz = async () => {
        // let res = await getUsersWithPanigate(page, LIMIT_USER);
        // console.log(res)
        // setUsers(res.participants);
        // setPageCount(res.totalPage);
    }

    return (
        <div className="quizz-container d-flex">
            <div className="left-content">
                <div className="title">
                    Quizz {quizzId}: Day la quizz
                </div>
                <div className="question">
                    <div className="question-title">
                        Question 1: Day la cau hoi
                    </div>
                    <div className="question-body">
                        <div className="a-child">
                            A. a child
                        </div>
                        <div className="b-child">
                            B. b child
                        </div>
                        <div className="c-child">
                            C. c child
                        </div>
                    </div>
                    <div className="question-footer d-flex justify-content-center">
                        <button className="btn btn-secondary">Previous</button>
                        <button className="btn btn-primary">Next</button>
                    </div>
                </div>

            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    );
}

export default DetailQuizz;