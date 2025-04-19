
import React from "react";
// import the header for header
import Header from "../Others/Headers";

// import CreatTask for performing the task 
import CreatTask from "../Others/Createtask";

// import alltask for check the status
import AllTask from "../Others/AllTask";

const AdminDashboard = (props) => {
    return (
        <div className="h-scren w-full p-7">
            <Header changeUser={props.changeUser} />
            <CreatTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard