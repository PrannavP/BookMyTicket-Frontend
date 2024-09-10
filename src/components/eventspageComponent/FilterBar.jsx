import { useContext, useState } from "react";
import { EventContext } from "../../context/EventContext";
import '../../styles/eventspage_styles/filter_bar.css'

const FilterBar = () => {
    const { applyFilters } = useContext(EventContext);

    const [filters, setFilters] = useState({
        location: '',
        fromDate: '',
        toDate: '',
        time: [],
        genre: [],
    });

    const handleFilterSubmit = async (event) => {
        event.preventDefault();
        await applyFilters(filters);
    };

    const handleLocationChange = (e) => {
        setFilters({ ...filters, location: e.target.value });
    };

    const handleGenreChange = (e) => {
        const value = e.target.name;
        setFilters((prevFilters) => {
            const newGenre = prevFilters.genre.includes(value)
                ? prevFilters.genre.filter((genre) => genre !== value)
                : [...prevFilters.genre, value];
            return { ...prevFilters, genre: newGenre };
        });
    };

    const handleFromDateChange = (e) => {
        setFilters({ ...filters, fromDate: e.target.value });
    };

    const handleToDateChange = (e) => {
        setFilters({ ...filters, toDate: e.target.value });
    };

    // const handleResetFilter = () => {
    //     setFilters({
    //         location: '',
    //         fromDate: '',
    //         toDate: '',
    //         time: [],
    //         genre: [],  
    //     });
    //     loadDefaultEvents();
    // };

    return (
        <div className="filter-bar-section">
            <div className="filterbar-title-holder">
                <h3>Filter</h3>
            </div>
            <hr />

            <div className="filterbar-bydate-holder">
                <h4 className="heading4-title">By Date</h4>
                <div className="from-date-holder">
                    <form>
                        <label htmlFor="fromdate">From</label><br />
                        <input type="date" name="fromdate" id="fromdate" value={filters.fromDate} onChange={handleFromDateChange} />
                    </form>
                </div>
                <div className="to-date-holder">
                    <form>
                        <label htmlFor="todate">To</label><br />
                        <input type="date" name="todate" id="todate" value={filters.toDate} onChange={handleToDateChange} />
                    </form>
                </div>
            </div>

            <hr />

            <div className="filterbar-bytime-holder">
                <h4 className="heading4-title">By Time</h4>
                <form>
                    <input type="checkbox" name="morning" id="morning" />
                    <label htmlFor="morning">Morning</label><br />

                    <input type="checkbox" name="noon" id="noon" />
                    <label htmlFor="noon">Noon</label><br />

                    <input type="checkbox" name="evening" id="evening" />
                    <label htmlFor="evening">Evening</label><br />

                    <input type="checkbox" name="night" id="night" />
                    <label htmlFor="night">Night</label>
                </form>
            </div>

            <hr />

            <div className="filterby-genre-holder">
                <h4 className="heading4-title">By Genre</h4>
                <form>
                    <input
                        type="checkbox"
                        name="Music"
                        id="Music"
                        checked={filters.genre.includes("Music")}
                        onChange={handleGenreChange}
                    />
                    <label htmlFor="music">Music</label><br />

                    <input
                        type="checkbox"
                        name="Comedy"
                        id="Comedy"
                        checked={filters.genre.includes("Comedy")}
                        onChange={handleGenreChange}
                    />
                    <label htmlFor="comedy">Comedy</label><br />

                    <input
                        type="checkbox"
                        name="Motivational"
                        id="Motivational"
                        checked={filters.genre.includes("Motivational")}
                        onChange={handleGenreChange}
                    />
                    <label htmlFor="motivational">Motivational</label><br />

                    <input
                        type="checkbox"
                        name="Theatre"
                        id="Theatre"
                        checked={filters.genre.includes("Theatre")}
                        onChange={handleGenreChange}
                    />
                    <label htmlFor="theatre">Theatre</label><br />

                    <input
                        type="checkbox"
                        name="Educational"
                        id="Educational"
                        checked={filters.genre.includes("Educational")}
                        onChange={handleGenreChange}
                    />
                    <label htmlFor="educational">Educational</label>
                </form>
            </div>

            <hr />

            <div className="filterby-location-holder">
                <h4 className="heading4-title">By Location</h4>
                <form>
                    <input type="text" placeholder="Location..." value={filters.location} onChange={handleLocationChange} />
                </form>
            </div>

            <div className="filterby-searchbtn-holder">
                <button onClick={handleFilterSubmit}>Search</button>
                {/* <button onClick={handleResetFilter}>Reset</button> */}
            </div>
        </div>
    );
};

export default FilterBar;