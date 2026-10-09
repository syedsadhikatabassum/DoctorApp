function Navbar() {
    let style={
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "lavender",
        color: "black"
    }
    return (
        <div style={style}>
            <h1>Doctor Application</h1>
            <div>
                <button>Home</button> &nbsp;&nbsp;
                <button>Add Doctor</button>
            </div>

        </div>
    )
}

export default Navbar;