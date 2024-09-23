const PopupComponent = ({ msg, type }) => {
    if(type === "error"){
        return (
            <h1>{msg}</h1>
        );
    }
};

export default PopupComponent;