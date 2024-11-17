
const VideoSection = () => {
    return (
        <div>

            <iframe
                className="pointer-events-none  w-full md:h-[715px] h-[500px] mt-10"
                // width="1268"
                // height="713"
                src="https://www.youtube.com/embed/PPDzXztji7w?autoplay=1&mute=1&playlist=PPDzXztji7w&loop=1&controls=0"
                title="Malaysia Cinematic | Travel Video #VM2020"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

        </div>
    );
};

export default VideoSection;