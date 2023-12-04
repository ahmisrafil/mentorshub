import { useLoaderData } from "react-router-dom";


const ClassDetails = () => {
    const Class = useLoaderData();
    console.log(Class);
    return (
        <div>
            <h3>Welcome to class details</h3>
        </div>
    );
};

export default ClassDetails;