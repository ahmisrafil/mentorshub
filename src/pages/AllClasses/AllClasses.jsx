import { useEffect, useState } from "react";
import ClassCard from "./ClassCard";


const AllClasses = () => {
    const [classes, setClasses] = useState([]);
    
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[])

    


    return (
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8  mx-6 lg:mx-20">
            {
                classes?.map((Class) => <ClassCard key={Class.id} Class={Class} ></ClassCard>)  
            }
        </div>
    );
};

export default AllClasses;