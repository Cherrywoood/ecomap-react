import React, {useEffect, useRef, useState} from 'react';
import './EcopointsDashboard.css'
import EcopointTypeFilter from "./components/EcopointTypeFilter/EcopointTypeFilter";
import EcopointList from "./components/EcopointList/EcopointList";
import Sidebar from "../../components/Sidebar/Sidebar";
import EcopointInfo from "./components/EcopointInfo/EcopointInfo";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchResultList from "../../components/SearchResultList/SearchResultList";
import {ecopointService} from "../../api/EcopointService";
import SelectMenu from "../../ui/SelectMenu/SelectMenu";
import ResetButton from "../../ui/ResetButton/ResetButton";
import {wasteTypes} from "../../constants/wasteTypes";
import {shopTypes} from "../../constants/shopTypes";
import {eventTypes} from "../../constants/eventTypes";
import EcopointFractionFilterList from "./components/EcopointFractionFilterList/EcopointFractionFilterList";
import BackButton from "../../ui/BackButton/BackButton";
import {ecopointTypes} from "../../constants/ecopointTypes";
import {useFetch} from "../../hooks/useFetch";

const timeAvailabilityFilters = ["все экоточки", "открытые экоточки", "круглосуточные", "открытые еще 2 часа"]
const EcopointsDashboard = ({
                                selectedTypeFilters,
                                ecopoints,
                                loadingEcopoints,
                                setScrollFetching,
                                selectSearchEcopoint,
                                isSelectFractionFilter,
                                setSelectedFractionFilters,
                                setEcopointImages,
                                openImages
                            }) => {
    const [isFilterShow, setIsFilterShow] = useState(false);
    const [isPointListShow, setIsPointListShow] = useState(true);
    const [isFilterListButtonsShow, setIsFilterListButtonsShow] = useState(true)
    const [isEcopointInfoShow, setIsEcopointInfoShow] = useState(false)
    const [ecopointInfo, setEcopointInfo] = useState(null)
    const [searchNameResults, setSearchNameResults] = useState([])
    const [searchAddressResults, setSearchAddressResults] = useState([])
    const scrollComponentRef = useRef(null);

    const showFilter = () => {
        setIsFilterShow(true);
        setIsPointListShow(false);
    }

    const showPointList = () => {
        setIsPointListShow(true)
        setIsFilterShow(false)
    }
    const resetFilters = () => {
        setSelectedFractionFilters([]);
    }

    const selectSearchResult = ({id, coordinates}) => {
        openEcopointInfo({id, coordinates});
        setSearchAddressResults([])
        setSearchNameResults([])
    }

    const [fetchEcopointInfo, loadingEcopointInfo] = useFetch(async (id) => {
            const ecopointInfo = await ecopointService.getEcopointById(id);
            console.log(ecopointInfo);
            setEcopointInfo(ecopointInfo);
        }
    )
    const openEcopointInfo = async ({id, coordinates}) => {
        console.log('open', id)
        if (id) {
            setIsPointListShow(false)
            setIsEcopointInfoShow(true)
            if (isFilterListButtonsShow) {
                setIsFilterListButtonsShow(false)
            }
            fetchEcopointInfo(id);
        }
        selectSearchEcopoint(coordinates);

    }

    const closeEcopointInfo = () => {
        console.log('close')
        setIsEcopointInfoShow(false)
        setIsPointListShow(true)
        if (selectedTypeFilters.length === 1) {
            setIsFilterListButtonsShow(true)
        }
        setEcopointInfo(null);
    }

    useEffect(() => {
        if (isEcopointInfoShow) {
            closeEcopointInfo();
        }
        if (selectedTypeFilters.length === 1) {
            setIsFilterListButtonsShow(true);
            showFilter();
        } else {
            setIsFilterListButtonsShow(false);
            showPointList();
        }
    }, [selectedTypeFilters]);

    useEffect(() => {
        const divElement = scrollComponentRef.current;

        if (divElement) {
            divElement.addEventListener('scroll', scrollHandler);
        }

        return () => {
            if (divElement) {
                divElement.removeEventListener('scroll', scrollHandler);
            }
        };
    }, []);

    const scrollHandler = (e) => {
        if (e.target.scrollHeight - (e.target.scrollTop + scrollComponentRef.current.clientHeight) <= 100) {
            setScrollFetching(true)
        }
    }

    return (
        <Sidebar>
            <div className="dashboard bg-green-600 md:max-w-md rounded-r-[20px] h-[36rem] flex flex-col py-8">
                <div className="mx-7">
                    <span className="inline-block text-2xl leading-7 mb-5 text-white font-semibold">
                    Экологическая карта Красногвардейского района
                </span>
                    <div className="flex justify-between space-x-2 mb-2.5">
                        <div className="flex items-center text-white space-x-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px]" fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span className="inline-block text-base/4 font-light">Показывать только</span>
                        </div>
                        <div className="w-[195px]">
                            <SelectMenu options={timeAvailabilityFilters}/>
                        </div>
                    </div>
                    <div className="relative mb-3.5">
                        <SearchBar onSearchByName={setSearchNameResults}
                                   onSearchByAddress={setSearchAddressResults}
                        />
                        <SearchResultList resultsByAddress={searchAddressResults} resultsByName={searchNameResults}
                                          selectSearchResult={selectSearchResult}/>
                    </div>
                    <EcopointTypeFilter ecopointTypes={ecopointTypes}/>
                    {
                        isFilterListButtonsShow &&
                        <div className="flex justify-between mt-8 space-x-2">
                            <div
                                className={`dashboard-lists-button ${isFilterShow ? "text-white" : "text-gray-500"}`}
                                onClick={showFilter}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"/>
                                </svg>
                                <span className="text-base/4">
                                Фильтр по экоточкам
                            </span>
                            </div>
                            <div
                                className={`dashboard-lists-button ${isPointListShow ? "text-white" : "text-gray-500"}`}
                                onClick={showPointList}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                                </svg>
                                <span className="text-base/4">Список экоточек</span>
                            </div>
                        </div>
                    }
                    {
                        isSelectFractionFilter && !isEcopointInfoShow &&
                        <div className="mt-2.5">
                            <ResetButton onClick={resetFilters}>Сбросить фильтр</ResetButton>
                        </div>
                    }
                    {
                        isEcopointInfoShow &&
                        <div className="mt-5">
                            <BackButton onClick={closeEcopointInfo}>Вернуться к списку эко-точек</BackButton>
                        </div>
                    }
                </div>

                <div className="filters-and-list-content ml-7 mr-3 mt-3 pr-2.5 overflow-y-auto"
                     ref={scrollComponentRef}>
                    {
                        isFilterShow && selectedTypeFilters[0]?.id === 1 &&
                        <EcopointFractionFilterList filters={wasteTypes}/>
                    }
                    {
                        isFilterShow && selectedTypeFilters[0]?.id === 2 &&
                        <EcopointFractionFilterList filters={shopTypes}/>
                    }
                    {
                        isFilterShow && selectedTypeFilters[0]?.id === 3 &&
                        <EcopointFractionFilterList filters={eventTypes}/>
                    }
                    {
                        isPointListShow &&
                        <EcopointList ecopoints={ecopoints}
                                      loadingEcopoints={loadingEcopoints}
                                      onSelectItem={openEcopointInfo}/>
                    }
                    {
                        isEcopointInfoShow &&
                        <EcopointInfo ecopoint={ecopointInfo}
                                      loading={loadingEcopointInfo}
                                      setEcopointImages={setEcopointImages}
                                      openImages={openImages}
                        />
                    }
                </div>
            </div>
        </Sidebar>
    );
};

export default EcopointsDashboard;