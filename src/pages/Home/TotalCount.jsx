import { useEffect, useState } from "react";


const TotalCount = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div  className="flex flex-col md:flex-row justify-between items-center bg-gray-100">
            <div className="lg:pl-32"> 
                <h3 className="text-xl font-semibold text-gray-600 ">Total Users: </h3>
                <h3 className="text-xl font-semibold text-gray-600 ">Total Classes: {classes.length} </h3>
                <h3 className="text-xl font-semibold text-gray-600 ">Total Enrollments: </h3>
            </div>
            <img className="h-[250px] w-[40vw] rounded-lg py-4 lg:px-32" src="/src/assets/img1.jpg" alt="" />
        </div>
    );
};

export default TotalCount;