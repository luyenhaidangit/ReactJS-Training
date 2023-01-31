import { useEffect } from "react";
import { useParams } from "react-router-dom";

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
        <>
            Trang detail quizz
        </>
    );
}

export default DetailQuizz;