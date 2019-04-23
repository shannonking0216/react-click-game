import React from 'react';

function Image(props) {
    const style = { height: "15rem", width: "15rem", backgroundPosition: "center", backgroundSize: "cover", backgroundImage: props.image};

    return (
        <div>
            <div
                role="img"
                onClick={() => props.imgClick(props.imgId)}
                aria-label="click item"
                className="click-item"
                style={style}
            />
        </div>
    )
}

export default Image;
