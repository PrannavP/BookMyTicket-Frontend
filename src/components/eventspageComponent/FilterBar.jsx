const FilterBar = () => {
    return(
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
                        <input type="date" name="fromdate" id="fromdate" />
                    </form>
                </div>
                <div className="to-date-holder">
                    <form>
                        <label htmlFor="todate">To</label><br />
                        <input type="date" name="todate" id="todate" />
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
                    <input type="checkbox" name="music" id="music" />
                    <label htmlFor="music">Music</label><br />

                    <input type="checkbox" name="comedy" id="comedy" />
                    <label htmlFor="comedy">Comedy</label><br />

                    <input type="checkbox" name="motivational" id="motivational" />
                    <label htmlFor="motivational">Motivational</label><br />

                    <input type="checkbox" name="theatre" id="theatre" />
                    <label htmlFor="theatre">Theatre</label><br />

                    <input type="checkbox" name="educational" id="educational" />
                    <label htmlFor="educational">Educational</label>
                </form>
            </div>

            <hr />

            <div className="filterby-location-holder">
                <h4 className="heading4-title">By Location</h4>
                <form>
                    <input type="text" placeholder="Location..." />
                </form>
            </div>

            <div className="filterby-searchbtn-holder">
                <button>Search</button>
            </div>

        </div>
    )
};

export default FilterBar;