import React from 'react';
import './EcopointList.css'
import EcopointItem from "./EcopointItem/EcopointItem";
import Loader from "../../../../ui/Loader/Loader";

const EcopointList = ({ecopoints, loadingEcopoints, onSelectItem}) => {
    return (
        <div className="flex flex-col items-center">
            {
                ecopoints.length === 0
                    ? (
                        loadingEcopoints
                            ? <div className="m-5"><Loader/></div>
                            : <div className="text-center mt-5 text-gray-400 text-base">
                                Ничего не найдено. <br/>
                                Сбросьте фильтр или отдалите карту.
                            </div>
                    )
                    : ecopoints.map(ecopoint =>
                        <EcopointItem key={ecopoint.id}
                                      ecopoint={ecopoint}
                                      onSelect={onSelectItem}
                        />
                    )
            }
        </div>
    );
};

export default EcopointList;