import { Oval } from "react-loader-spinner";
import '../../styles/loader.css';

const Loader = () => {
    return (
        <div className="loading-container">
            <Oval 
                height={100}
                width={100}
                color="#FF6F00"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#0056FF"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    )
};

export default Loader;