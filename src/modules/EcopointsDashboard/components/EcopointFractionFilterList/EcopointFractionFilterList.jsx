import React, {useContext} from 'react';
import EcopointFractionFilterItem from "./EcopointFractionFilterItem/EcopointFractionFilterItem";
import {FilterEcopointContext} from "../../../../context/filtersContext";

const EcopointFractionFilterList = ({filters}) => {
    const {selectedFractionFilters, setSelectedFractionFilters} = useContext(FilterEcopointContext);
    const selectFilter = (selectedFilter) => {
        console.log('SELECT FILTER', selectedFilter)
        if (!selectedFractionFilters.includes(selectedFilter)) {
            setSelectedFractionFilters([...selectedFractionFilters, selectedFilter]);
        } else {
            setSelectedFractionFilters(selectedFractionFilters.filter(filter => filter !== selectedFilter));
        }
    }

    return (
        <div className="grid grid-cols-5">
            {filters.map(filter =>
                <EcopointFractionFilterItem key={filter.id} name={filter.name} image={filter.image} alt={filter.alt}
                                            isSelected={selectedFractionFilters.includes(filter.id)}
                                            onClick={() => selectFilter(filter.id)}/>
            )}
        </div>
    );
};

export default EcopointFractionFilterList;