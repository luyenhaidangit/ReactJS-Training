import _ from "lodash";
import Image from "../../assets/img/0a435d1641ddf309b273acd0ef4e0684.jpg"
import "./Question.scss"

const Question = (props) => {

    const { index } = props;
    const { dataQuizz } = props;
    console.log(index)
    console.log(dataQuizz)

    if (_.isEmpty(dataQuizz)) {
        return (<></>)
    }

    return (
        <div className="question-item">
            {
                Image &&
                <div className="question-image my-2">
                    <img src={Image} className="img-fluid"></img>
                </div>
            }

            <div className="question-title">
                Question {index + 1}: {dataQuizz.descripton}
            </div>
            <div className="question-body">
                {
                    dataQuizz.answers && dataQuizz.answers.length > 0 &&
                    dataQuizz.answers.map((item, index) => {
                        return (
                            <div key={`answer-${index}`} className="a-child">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        {item.description}
                                    </label>
                                </div>
                            </div>
                        )
                    })
                }

                {/* <div className="b-child">
                    B. b child
                </div>
                <div className="c-child">
                    C. c child
                </div> */}
            </div>
        </div>
    );
}

export default Question;