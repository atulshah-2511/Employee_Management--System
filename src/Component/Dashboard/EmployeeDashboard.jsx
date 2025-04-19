import React from "react";
// import another function here >> header
import Header from "../Others/Headers";
// import another function here >>TaskListNumber
import TaskListNumber from "../Others/TaskListnumber";
// import another function here >>TaskList
import TaskList from "../TaskList/Tasklist";

const EmployeeDashboard = (props) => {
    return (
        <div className="p-10 bg-[#1C1C1C] h-screen">
            <Header changeUser={props.changeUser} data={props.data} />
            <TaskListNumber data={props.data} />
            <TaskList data={props.data} />
        </div>
    )
}

export default EmployeeDashboard

// Note>> We create Employee Dashboard file, In this file we create all the dashboard Features
//         we create two file 1.headers and 2.TaskListNumber 3. TaskList
//         and Import all Files into EmployeeDashboard