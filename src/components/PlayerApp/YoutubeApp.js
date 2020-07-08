import React from 'react';
import axios from 'axios';

import SearchForm from './SearchForm';
import YoutubePlayer from './YoutubePlayer';
import PreviewList from './PreviewList';

class YoutubeApp extends React.Component {
    state = {
        videos: null,
        activeVideoId: null,
    }

    getValue = (value) => {
        this.setState({ value });
    }
    
    searchVideo = (searchPhrase) => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB6C4Zh2hEiM6N5yn-RdXyEZqsh2kXIBeY&q=${searchPhrase}&type=video`)
            .then(response => {
                const videos = response.data;
                console.log(videos);
                const firstVideoId = videos.items[0].id.videoId;
                this.setState({ videos, activeVideoId: firstVideoId });
            })
    }

    selectVideo = (videoId) => {
        this.setState({ activeVideoId: videoId })
    }

    render() {
        const { videos, activeVideoId } = this.state;

        return (
            <>
                <SearchForm onSubmit={this.searchVideo} />
                {videos && (
                    <>
                        <YoutubePlayer videoId={activeVideoId} />
                        <PreviewList videos={this.state.videos} onClick={this.selectVideo} />
                    </>
                )}
            </>
        )
    }
}
export default YoutubeApp;