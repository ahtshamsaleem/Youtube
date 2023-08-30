import React from 'react'
import moment from 'moment'

const VideoLength = ({time}) => {

    const videoLenthInSec = moment().startOf('day').seconds(time).format('H:mm:ss');

  return (
    <div className="absolute bottom-2 right-2 bg-black text-white text-xs rounded-md py-1 px-2">
        {videoLenthInSec}
    </div>
  )
}

export default VideoLength