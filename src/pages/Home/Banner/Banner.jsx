import banner from '../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to MentorsHub</h1>
                    <p className="mb-5">Build a strong professional network by connecting with mentors and fellow mentees from diverse backgrounds.</p>
                    <button className="btn btn-primary bg-[#9c1313] border-none">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;