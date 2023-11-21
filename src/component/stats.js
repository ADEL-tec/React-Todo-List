import React, { useState } from "react";

import FilterOutline from "../assets/filter_outline.svg";
import FilterFill from "../assets/filter_fill.svg";

const Stats = ({ searchQuery, setSearchQuery, enableFilter, setEnableFilter, allTasks, selectedTasks, unselectedTasks }) => {
    const [icon, setIcon] = useState(FilterOutline);

    const filterClick = () => {
        console.log(icon === FilterFill);
        console.log(icon === FilterOutline);
        if (icon === FilterFill) {
            setIcon(FilterOutline);
            setEnableFilter(false);
        } else {
            setIcon(FilterFill);
            setEnableFilter(true);
        }
    }

    return (
        <div className='right-content'>
            <div className="filter-search">
                <input
                    type="text"
                    placeholder="Search tasks"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <img className="filter-icon" src={icon} onClick={filterClick}></img>
            </div>
            <div className='stats'>
                <p>All(<span className="all">{allTasks}</span>)</p>
                <p>Selected(<span className="selected">{selectedTasks}</span>)</p>
                <p>unselected(<span className="unselected">{unselectedTasks}</span>)</p>
            </div>
        </div>);
}

export default Stats;