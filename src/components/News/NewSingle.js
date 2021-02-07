import React from 'react';

const NewSingle=({item})=>(
    <div className="col s4">
        <div className="card">
            <div className="card-immage">
                <img src={item.urlToImage} alt={item.title} height={400} width={300}/>
                <br/>
                <span className="card-title">{item.source.name}</span>
            </div>
            <div className="card-content">
                <p> {item.description} </p>
            </div>
            <div className="card-action">
                <a href={item.url} target="_blank" rel="noreferrer">Full Article!!</a>
            </div>
        </div>
    </div>       
)

export default NewSingle;