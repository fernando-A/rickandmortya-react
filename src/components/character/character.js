import React from 'react'

function Character({id, name, image, species, gender}) {
  return (
    <div className="col s12 m6 l4 xl4" key={id}>
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" loading="lazy" src={image} alt=""/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{name}<i className="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{name}<i className="material-icons right">close</i></span>
                <p>Gender:  {gender}</p>
                <p>Species:  {species}</p>
            </div>
        </div>
    </div>
  )
}

export default Character
