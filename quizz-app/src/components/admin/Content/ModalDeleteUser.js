import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { deleteUser } from '../../../services/apiService'

const ModalDeleteUser = (props) => {
    //Props
    const { show, setShow, dataUpdate } = props;
    // console.log(props.dataUpdate.email)
    // //UseState
    // const [id, setId] = useState("");
    // const [email, setEmail] = useState(props.dataUpdate.email);
    // const [password, setPassword] = useState("");
    // const [username, setUsername] = useState("");
    // const [role, setRole] = useState("user");
    // const [image, setImage] = useState("");
    // const [previewImage, setPreviewImage] = useState("");

    // useEffect(() => {
    //     if (!_.isEmpty(dataUpdate)) {
    //         setId(dataUpdate.id);
    //         setEmail(dataUpdate.email);
    //         setUsername(dataUpdate.username);
    //         setRole(dataUpdate.role);
    //         setPassword(dataUpdate.password);
    //     }
    // }, [dataUpdate])


    //Close Modal
    const handleClose = () => {
        setShow(false);
    };

    const handleOnSubmitDeleteUser = () => {
        //Call API
        deleteUser(dataUpdate.id)
            .then(function (response) {
                console.log(response)
                toast.success("Xoa thông tin thành công");
                handleClose();
                props.fetchUsers();
            })
            .catch(function (error) {
                console.log(error)
                toast.error("Thất bại!", {
                    position: toast.POSITION.TOP_RIGHT
                });
            });
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa thông tin user</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có chắc chắn muốn xóa thông tin của user email: <b>{dataUpdate && dataUpdate.email ? dataUpdate.email : ""}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Bỏ qua
                    </Button>
                    <Button variant="primary" onClick={() => handleOnSubmitDeleteUser()}>
                        Xác nhận
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;