import React, {useEffect, useState} from 'react';
import {OpenStreetMapProvider} from 'leaflet-geosearch';
import './SearchBar.css'
import {ecopointService} from "../../api/EcopointService";
import useDebounce from "../../hooks/useDebounce";

const SearchBar = ({onSearchByName, onSearchByAddress}) => {
    const [searchText, setSearchText] = useState('');
    const debouncedSearchText = useDebounce(searchText, 500);
    const searchProvider = new OpenStreetMapProvider();

    useEffect(() => {
        const fetchSearch = async () => {
            if (debouncedSearchText) {
                const searchByAddress = await searchProvider.search({query: searchText});
                onSearchByAddress(searchByAddress)
                const searchByName = await ecopointService.searchEcopointsByName(debouncedSearchText);
                onSearchByName(searchByName)
            } else {
                onSearchByName([]);
                onSearchByAddress([]);
            }
        }
        fetchSearch();
    }, [debouncedSearchText]);

    const clear = () => {
        setSearchText('');
        onSearchByAddress([]);
        onSearchByName([]);
    }

    return (
        <div className='search-bar flex relative'>
            <svg xmlns="http://www.w3.org/2000/svg" className="left-2.5 pointer-events-none"
                 viewBox="0 0 20 20" fill="#808080">
                <path fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"/>
            </svg>
            <input className="text-stone-800 text-base leading-5 placeholder:text-gray-200 rounded-xl w-full min-w-[300px] py-2 px-9
             border-2 border-transparent focus:outline-none focus:border-2 focus:border-green-100"
                   type="text"
                   value={searchText}
                   onChange={(e) => setSearchText(e.target.value)}
                   placeholder='Поиск по названию и адресу...'/>
            {
                searchText.length > 0 &&
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#808080"
                     className="clean-icon cursor-pointer right-2.5 hover:fill-green-600" onClick={clear}>
                    <path
                        d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"/>
                </svg>
            }
        </div>
    );
};

export default SearchBar;