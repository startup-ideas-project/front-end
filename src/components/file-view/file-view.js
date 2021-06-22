import React from 'react';

const FileView = ({documents, setDocument}) => {
    const onClickHandler = (id) =>{
        setDocument(id)
    }
    return(
        <div className='channel-list'>
            {documents.map(item => {
                return (
                <ul key={item.key}>
                    <button onClick={(event) =>{
                        event.preventDefault()
                        onClickHandler(item)
                    }}>
                        {item.S3URL}
                    </button>
                </ul>)
            })}
        </div>
    )
}

export default FileView;