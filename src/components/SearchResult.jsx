import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utility/api";
import { Context } from "../context/contextApi";
import  LeftNav  from "./LeftNav";
import  SearchResultVideoCard  from "./SearchResultVideoCard";
import Backdrop from "../shared/BackDrop";

const SearchResult = () => {
    const [result, setResult] = useState();
    const { searchQuery } = useParams();
    const { setLoading, mobileMenu, setMobileMenu, setModal, setModalMsg, modal } = useContext(Context);

    useEffect(() => {
       
        fetchSearchResults();
    }, [searchQuery]);

    const fetchSearchResults = () => {
        setLoading(true);
        fetchDataFromApi("/search/?q=" + searchQuery).then((res) => {
            setResult(res.contents);
            setLoading(false);
            setModal(false);
        })
        .catch((error) => {
            setModalMsg(error.message);
            setModal(true);
        })
    };

    return (
        <>
            {mobileMenu ? <Backdrop close={() => setMobileMenu(false)} /> : null}
            <div className='flex flex-row h-[calc(100%-56px)] relative'>
            <LeftNav />

            
            <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black dark:bg-white'>
                <div className='grid grid-cols-1 gap-2 p-5 '>
                    {result?.map((item) => {
                        if (item?.type !== "video") return false
                        let video = item?.video;
                        return (
                            <SearchResultVideoCard
                                key={video?.videoId}
                                video={video}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
        </>
        
    );
};

export default SearchResult;
