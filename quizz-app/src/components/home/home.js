import videoBackground from '../../assets/video/video-background.mp4';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    const navigate = useNavigate();

    return (
        <div className="home">
            <div className='homepage-hero'>
                <div className='video-background'>
                    <video autoPlay loop muted>
                        <source src={videoBackground} type="video/mp4" />
                    </video>
                </div>
                <div className='introduct-content'>
                    <h1 className='title'>There's a better <br /> way to ask</h1>
                    <p className='description'> You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.</p>
                    {
                        isAuthenticated === true ?
                            <button className='button' onClick={() => { navigate("/user") }}>Doing Quizz Now</button> :
                            <button className='button' onClick={() => { navigate("/auth/login") }}>Get started - it's free</button>
                    }

                </div>
            </div>
        </div>
    );
}

export default Home;