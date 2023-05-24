import React, {useContext} from 'react';
import './EcopointTypeFilter.css'
import FilterButton from "./FilterButton/FilterButton";
import {FilterEcopointTypeContext} from "../../../../context/filtersContext";

const EcopointTypeFilter = ({ecopointTypes}) => {
    const {selectedTypeFilters, setSelectedTypeFilters, setPrevSelectedTypeFilters} = useContext(FilterEcopointTypeContext);
    const selectFilter = (selectedFilter) => {
        setPrevSelectedTypeFilters(selectedTypeFilters);
        if (!selectedTypeFilters.some(filter => filter.id === selectedFilter.id)) {
            setSelectedTypeFilters([...selectedTypeFilters, selectedFilter]);
        } else {
            setSelectedTypeFilters(selectedTypeFilters.filter(filter => filter.id !== selectedFilter.id));
        }
    }
    const isSelected = (id) => {
        return selectedTypeFilters.some(selectTypeFilter => selectTypeFilter.id === id)
    }

    return (
        <div className="flex justify-between">
            {
                ecopointTypes.map(ecopointType => {
                    const id = ecopointType.id;
                    const type = ecopointType.type;
                    return <FilterButton key={id}
                                         isSelected={isSelected(id)}
                                         onClick={() => selectFilter({id: id, type: type})}>
                        {ecopointType.name}
                    </FilterButton>
                })
            }
        </div>
    );
};

export default EcopointTypeFilter;
