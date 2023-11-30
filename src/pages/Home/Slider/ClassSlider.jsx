


const ClassSlider = ({ Class }) => {
    const { title, name, details, price, image, enrollment } = Class;
    return (
        
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Class" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}<span className="text-sm font-normal">by {name}</span>
                    <div className="badge badge-secondary">${price}</div>
                </h2>
                <h3>Enrolled by- {enrollment}</h3>
                <p>{details}</p>
               
            </div>
        </div>



    );
};

export default ClassSlider;