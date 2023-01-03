import videoBackground from '../../assets/video/video-background.mp4'

const Home = () => {
    return (
        <div className="home">
            <video autoPlay loop muted>
                <source src={videoBackground} type="video/mp4" />
            </video>
        </div>
    );
}

export default Home;