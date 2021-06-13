import React from 'react';
import { Channel } from './Channel';

const ChannelList = ({onSelectChannel, channels}) => {

    const handleClick = id => {
        onSelectChannel(id);
    }
    const generateList = () => {
        let list = <div className="no-content-message">There is no channels to show</div>;
        if (channels && channels.map) {
            list = channels.map(chanelObject => <Channel key={`${chanelObject.id}`} id={chanelObject.id} name={chanelObject.name} participants={chanelObject.participants} onClick={() => handleClick(chanelObject.id)} />);
        }
        return list
    }
    
    return (
        <div className='channel-list'>
            {generateList()}
        </div>
    )
}

export {
    ChannelList
}