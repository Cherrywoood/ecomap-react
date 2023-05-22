import React from 'react';
import './SearchResultList.css'
import SearchResult from "../SearchResult/SearchResult";

const SearchResultList = ({resultsByName, resultsByAddress, selectSearchResult}) => {
    const hasResultsByName = resultsByName.length > 0;
    const hasResultsByAddress = resultsByAddress.length > 0;

    const selectPoint = (result) => {
        console.log('selectresult')
        const id = result.id;
        const coordinates = [result.position.coordinates[1], result.position.coordinates[0]];
        selectSearchResult({id, coordinates});
    }

    const selectAddress = (result) => {
        console.log('selectresult')
        console.log(result)
        const coordinates = [result.y, result.x];
        selectSearchResult({coordinates});
    }

    return (
        <>
            {
                (hasResultsByName || hasResultsByAddress) &&
                <div className="bg-white mt-2.5 rounded-xl py-2.5 absolute shadow-lg z-50">
                    <div className="search-result-content flex flex-col max-h-[300px] overflow-y-auto">
                        {hasResultsByName && <span className="text-stone-800 text-base font-bold px-4">Пункты</span>}
                        {
                            resultsByName.map(result =>
                                <SearchResult key={result.id} onClick={() => selectPoint(result)}>
                                    <div className='flex-col'>
                                        <div
                                            className="text-stone-700 text-sm font-semibold">{result.name}</div>
                                        <div className={'text-stone-600 text-xs'}>{result.address}</div>
                                    </div>
                                </SearchResult>
                            )
                        }
                        {hasResultsByAddress && <span className="text-stone-800 text-base font-bold px-4">Адреса</span>}
                        {
                            resultsByAddress.map(result =>
                                <SearchResult key={result.raw.osm_id} onClick={() => selectAddress(result)}>
                                    <div className='text-stone-600 text-xs'>{result.label}</div>
                                </SearchResult>
                            )
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default SearchResultList;