import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike, AiOutlineEye } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";

import LeftNav from "./LeftNav";
import { fetchDataFromApi } from "../utility/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionVideoCard";
import Backdrop from "../shared/Backdrop";

const VideoDetails = () => {
    const [video, setVideo] = useState();
    const [relatedVideos, setRelatedVideos] = useState();
    const { id } = useParams();
    const { loading, setLoading, mobileMenu, setMobileMenu } =
        useContext(Context);

    useEffect(() => {
        fetchVideoDetails();
        fetchRelatedVideos();
    }, [id]);

    const fetchVideoDetails = () => {
        setLoading(true);
        fetchDataFromApi("/video/details/?id=" + id)
            .then((res) => {
                setVideo(res);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    };

    const fetchRelatedVideos = () => {
        setLoading(true);
        fetchDataFromApi("/video/related-contents/?id=" + id).then((res) => {
            setRelatedVideos(res);
            setLoading(false);
        });
    };

    return (
        <>
            {mobileMenu ? (
                <Backdrop close={() => setMobileMenu(false)} />
            ) : null}

            <div className='relative pt-2 m-0 h-[calc(100%-56px)]  bg-black dark:bg-white '>
                <LeftNav childStyle='hideLeftNav' />

                {!loading && (
                    <div className='flex justify-center flex-row h-full'>
                        <div className='w-full max-w-[1280px] flex flex-col lg:flex-row h-auto overflow-y-auto'>
                            <div className='flex flex-col lg:w-[calc(100%-350px)] xl-w-[calc(100%-40px)] px-4 py-3 lg:py-6 '>
                                <div className='h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0'>
                                    <ReactPlayer
                                        url={
                                            "http://www.youtube.com/watch?v=" +
                                            id
                                        }
                                        width='100%'
                                        height='100%'
                                        style={{
                                            backgroundColor: "#000000",
                                        }}
                                        playing={true}
                                    />
                                </div>

                                <div className='text-white font-bold text-sm md:text-xl mt-4 line-clamp-2 dark:text-black'>
                                    {video?.title}
                                </div>

                                <div className='flex justify-between flex-col md:flex-row mt-4'>
                                    <div className='flex'>
                                        <div className='flex items-start'>
                                            <div className='flex h-11 w-11 rounded-full'>
                                                <img
                                                    src={
                                                        video?.author?.avatar[0]
                                                            ?.url
                                                    }
                                                    className='h-full w-full object-cover'
                                                />
                                            </div>
                                        </div>

                                        <div className='flex flex-col ml-3'>
                                            <div className='text-white text-md font-semibold flex items-center dark:text-black'>
                                                {video?.author?.title}
                                                {video?.author?.badges[0]
                                                    ?.type ===
                                                    "VERIFIED_CHANNEL" && (
                                                    <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1 dark:text-black/[0.5]' />
                                                )}
                                            </div>

                                            <div className='text-white/[0.7] text-sm dark:text-black/[0.7]'>
                                                {
                                                    video?.author?.stats
                                                        ?.subscribersText
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex text-white mt-4 md:mt-0 dark:text-black'>
                                        <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] dark:bg-black/[0.15] cursor-pointer'>
                                            <AiOutlineLike className='text-xl text-white mr-2 dark:text-black' />
                                            <span>
                                                {" "}
                                                {`${abbreviateNumber(
                                                    video?.stats?.likes,
                                                    2
                                                )}`}{" "}
                                            </span>
                                        </div>

                                        <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4 dark:bg-black/[0.15]'>
                                            <AiOutlineEye className='text-xl text-white mr-2 dark:text-black' />
                                            <span>
                                                {" "}
                                                {`${abbreviateNumber(
                                                    video?.stats?.views,
                                                    2
                                                )}`}{" "}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='related-videos flex flex-col py-6 px-4  lg:w-[350px] xl:w-[400px] md:overflow-y-auto custom-scroll-bar-2'>
                                {relatedVideos?.contents?.map((item, index) => {
                                    if (item.type !== "video") {
                                        return false;
                                    }
                                    return (
                                        <SuggestionVideoCard
                                            key={index}
                                            video={item?.video}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default VideoDetails;
