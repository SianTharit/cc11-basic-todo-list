// import { useState } from "react";
// import Button from "./ui/Button";
// // React.fragment <></>
// function TodoInput(props) {
//     const [input, setInput] = useState({
//         email: "",
//         username: "",
//         phoneNumber: "",
//     });

//     const [error, setError] = useState({
//         email: "",
//         username: "",
//         phoneNumber: "",
//     });

//     const handleChangeInput = (event) => {
//         const oldInput = { ...input };
//         oldInput[event.target.name] = event.target.value;
//         setInput(oldInput);
//     };

//     const newError = {};
//     const handleSubmitFrom = (event) => {
//         event.preventDefault();
//         if (!input.email) {
//             newError.email = "Email is required";
//         }

//         if (!input.username) {
//             newError.username = "Username is required";
//         }

//         if (!input.phoneNumber) {
//             newError.phoneNumber = "Phone Number is required";
//         } else if (input.phoneNumber.length !== 10) {
//             newError.phoneNumber = "Invalid phone number format";
//         } else {
//             setError({});
//         }

//         if (Object.keys(newError).length > 0) {
//             setError(newError);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmitFrom}>
//             <div className="mb-3">
//                 <label htmlFor="email" className="form-label">
//                     Email address
//                 </label>
//                 <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     name="email"
//                     value={input.email}
//                     onChange={handleChangeInput}
//                 />
//                 {error.email && (
//                     <small className="text-danger">{error.email}</small>
//                 )}
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="username" className="form-label">
//                     Username
//                 </label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     id="username"
//                     name="username"
//                     value={input.username}
//                     onChange={handleChangeInput}
//                 />
//                 {error.username && (
//                     <small className="text-danger">{error.username}</small>
//                 )}
//             </div>
//             <div className="mb-3">
//                 <label htmlFor="phoneNumber" className="form-label">
//                     Phone Number
//                 </label>
//                 <input
//                     type="text"
//                     className="form-control"
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     value={input.phoneNumber}
//                     onChange={handleChangeInput}
//                 />
//                 {error.phoneNumber && (
//                     <small className="text-danger">{error.phoneNumber}</small>
//                 )}
//             </div>
//             <button type="submit" className="btn btn-success">
//                 Submit
//             </button>
//             <button type="button" className="btn btn-danger ms-3">
//                 Cancel
//             </button>
//         </form>
//     );
// }

// export default TodoInput;

import { useState } from "react";
import Button from "./ui/Button";

function TodoInput(props) {
    const [todoInput, setTodoInput] = useState("");
    const [todoError, setTodoError] = useState("");

    const handleClickCreateBtn = () => {
        if (!todoInput) {
            setTodoError("Title is required");
        } else {
            props.createTodo(todoInput);
            setTodoError("");
            setTodoInput("");
        }
    };

    return (
        <>
            <div className="input-group shadow">
                <input
                    type="text"
                    className={`form-control ${todoError ? "is-invalid" : ""}`}
                    placeholder="Enter new todo"
                    value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)}
                />
                <Button color="success" onClick={handleClickCreateBtn}>
                    <i className="fa-solid fa-plus" />
                </Button>
                <Button
                    color="outline-secondary"
                    onClick={() => setTodoInput("")}
                >
                    <i className="fa-solid fa-x" />
                </Button>
            </div>
            {todoError && <small className="text-danger">{todoError}</small>}
        </>
    );
}

export default TodoInput;
