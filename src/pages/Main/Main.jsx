import React, {useEffect, useState} from 'react';
import "./Main.css"
import {FilterEcopointContext, FilterEcopointTypeContext} from "../../context/filtersContext";
import EcopointsDashboard from "../../modules/EcopointsDashboard/EcopointsDashboard";
import Map from "../../modules/Map/Map";
import Slider from "../../components/Slider/Slider";
import Modal from "../../components/Modal/Modal";
import {ecopointService} from "../../api/EcopointService";
import {useFetch} from "../../hooks/useFetch";

const Main = () => {
    const [selectedTypeFilters, setSelectedTypeFilters] = useState([]);
    const [prevSelectedTypeFilters, setPrevSelectedTypeFilters] = useState(selectedTypeFilters);
    const [selectedFractionFilters, setSelectedFractionFilters] = useState([])
    const [modalActive, setModalActive] = useState(false)
    const [ecopointImages, setEcopointImages] = useState([]);
    const [selectedEcopoint, setSelectedEcopoint] = useState(null);
    const [userBounds, setUserBounds] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [ecopoints, setEcopoints] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const [size] = useState(10);
    const [scrollFetching, setScrollFetching] = useState(false);
    const [totalCount, setTotalCount] = useState(0)

    const [loadingEcopoints, setLoadingEcopoints] = useState(false)

    const [fetchEcopoints] = useFetch(async (bounds, typeFilters,
                                             fractionFilters, page, size) => {
            setLoadingEcopoints(true)
            const timeout = setTimeout(async () => {
                const ecopoints = await ecopointService
                    .getEcopointsInBoundsPagination(bounds, typeFilters, fractionFilters, page, size);
                console.log(ecopoints)
                setEcopoints(ecopoints)
                /* setTotalCount(ecopoints.headers['x-total-count'])
                 if (page === 0) {
                     setEcopoints(ecopoints.data);
                 } else
                     setEcopoints(prevState => [...prevState, ...ecopoints.data])
                 setCurrentPage(prevState => prevState + 1)*/
                setScrollFetching(false);
                setLoadingEcopoints(false)
            }, 1200);
        }
    )

    const fetchMarkers = async (bounds, typeFilters, fractionFilters,) => {
        const timeout = setTimeout(async () => {
            console.log('tut')
            const markers = await ecopointService.getEcopointsInBounds(bounds, typeFilters, fractionFilters);
            setMarkers(markers);
        }, 120);
        console.log('end')
    }

    useEffect(() => {
        if (userBounds) {
            setCurrentPage(0)
            fetchMarkers(userBounds, selectedTypeFilters, selectedFractionFilters);
            fetchEcopoints(userBounds, selectedTypeFilters, selectedFractionFilters, 0, size);
        }
    }, [userBounds]);

    useEffect(() => {
        if (userBounds) {
            if (prevSelectedTypeFilters.length === 1 && selectedFractionFilters.length !== 0) {
                setSelectedFractionFilters([]);
            } else {
                console.log("2")
                setCurrentPage(0)
                fetchMarkers(userBounds, selectedTypeFilters, selectedFractionFilters);
                fetchEcopoints(userBounds, selectedTypeFilters, selectedFractionFilters, 0, size);
            }

        }
    }, [selectedTypeFilters, selectedFractionFilters])


    useEffect(() => {
        if (ecopoints.length < totalCount && scrollFetching) {
            console.log("1")
            fetchEcopoints(userBounds, selectedTypeFilters, selectedFractionFilters, currentPage, size);
        }
    }, [scrollFetching])


    return (
        <main className="main">
            <FilterEcopointTypeContext.Provider value={{
                selectedTypeFilters, setSelectedTypeFilters,
                prevSelectedTypeFilters, setPrevSelectedTypeFilters
            }}>
                <FilterEcopointContext.Provider value={{selectedFractionFilters, setSelectedFractionFilters}}>
                    <EcopointsDashboard selectedTypeFilters={selectedTypeFilters}
                                        ecopoints={ecopoints}
                                        loadingEcopoints={loadingEcopoints}
                                        setScrollFetching={setScrollFetching}
                                        selectSearchEcopoint={setSelectedEcopoint}
                                        isSelectFractionFilter={selectedFractionFilters.length > 0}
                                        setSelectedFractionFilters={setSelectedFractionFilters}
                                        setEcopointImages={setEcopointImages}
                                        openImages={setModalActive}
                    />
                    <Map markers={markers}
                         setUserBounds={setUserBounds}
                         selectedMarker={selectedEcopoint}/>
                    <Modal active={modalActive} setActive={setModalActive}>
                        <Slider images={ecopointImages}/>
                    </Modal>
                </FilterEcopointContext.Provider>
            </FilterEcopointTypeContext.Provider>
        </main>
    );
};

export default Main;