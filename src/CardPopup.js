import React from 'react';

const style = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    textAlign: 'center'
};

const CardPopup = () =>
    <div style={style}>
        <button>Close</button>
        <input value='name'></input>
        <div>Column name</div>
        <div>Author</div>
        <button>Delete</button>
        <input value='Description'></input>
        <div>
            <input value='Comment 1'></input>
            <input value='Comment 2'></input>
            <input value='Comment 3'></input>
        </div>
    </div>

export default CardPopup;