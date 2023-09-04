import React, { useContext, useEffect } from "react";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";
import Backdrop from "../shared/Backdrop";

const Feed = () => {
    const { loading, setLoading, searchResults, mobileMenu, setMobileMenu } =
        useContext(Context);

    return (
        <>
            {mobileMenu ? (
                <Backdrop close={() => setMobileMenu(false)} />
            ) : null}

            <div className='flex flex-row h-[calc(100%-56px)] relative '>
                <LeftNav />

                <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black custom-scroll-bar-2 dark:bg-white'>
                    <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2'>
                        {!loading &&
                            searchResults &&
                            searchResults?.map((item) => {
                                if (item?.type !== "video") return false;
                                return (
                                    <VideoCard
                                        key={
                                            item?.video?.videoId +
                                            Math.random().toString()
                                        }
                                        video={item?.video}
                                        setLoadingTrue={setLoading}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feed;
