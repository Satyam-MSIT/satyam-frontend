
import React from "react";
import Modal from "@material-ui/core/Modal";
const Modals = () => {
    const [open, setOpen] = React.useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };
  return (
    <div
            style={{
                textAlign: "center",
                display: "block",
                padding: 30,
                margin: "auto",
            }}
        >
            <h1 style={{ color: "green" }}>
                GeeksforGeeks
            </h1>
            <h4>Modal Component in ReactJS?</h4>
            <button type="button" onClick={handleOpen}>
                Click Me to Open Modal
            </button>
            <Modal
                onClose={handleClose}
                open={open}
                style={{
                    position: "absolute",
                    border: "2px solid #000",
                    backgroundColor: "white",
                    boxShadow: "2px solid black",
                    height: 200,
                    width: 240,
                    margin: "auto",
                    padding: "2%",
                    color: "white",
                }}
            >
                <>
                    <form>
                    Name:
                    <input type="text" name="name"/>
                    Email:
                    <input type="email" name="email"/>
                    <input type="submit"  className="bg-indigo-500 mt-3 rounded-2xl" name="Submit"/>
                    </form>
                </>
            </Modal>
        </div>
  )
}

export default Modals
