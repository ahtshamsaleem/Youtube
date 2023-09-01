import React, {useContext, useEffect} from 'react'
import { Context } from '../context/contextApi'
import LeftNav from './LeftNav'
import VideoCard from './VideoCard'
import Modal from '../shared/Modal'


const Feed = () => {
    const { loading, searchResults, mobileMenu, setMobileMenu } = useContext(Context);

    useEffect(() => {
        document.getElementById("root").classList.remove("custom-h");
    }, []);

    return (
        <div className='flex flex-row h-[calc(100%-56px)] relative '>
            <LeftNav />
            {mobileMenu ? <Modal close={() => setMobileMenu(false)} /> : null}
            <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black custom-scroll-bar-2'>
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-2'>
                    {!loading &&
                        searchResults &&
                        searchResults?.map((item) => {
                            if (item?.type !== "video") return false;
                            return (
                                <VideoCard
                                    key={item?.video?.videoId}
                                    video={item?.video}
                                />
                            );
                        })}
                </div>
            </div>
        </div>
    );
}

export default Feed