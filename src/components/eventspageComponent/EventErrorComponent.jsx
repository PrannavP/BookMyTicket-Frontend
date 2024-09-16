const EventErrorCompnent = () => {
    return (
        <div style={styles.div}>
            <p style={styles.p}>Error While Fetching Events :(</p>
        </div>
    )
};

const styles = {
    div:{
        marginTop: "25%",
        marginLeft: "36%",
        display: "inline-block"
    },

    p:{
        fontWeight: "bold",
        color: "#FFFFFF",
        fontSize: '19px',
    }
};

export default EventErrorCompnent;