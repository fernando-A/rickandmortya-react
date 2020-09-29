import React from 'react';
import './filter.scss';
import { useDispatch } from 'react-redux'




export default function Filter() {

    const dispatch = useDispatch()

    const handleInputChange = (event) =>{
        dispatch({
            type: 'SET_CHARACTER_NAME',
            payload: event.target.value
        })
    }


  return (
    <div className="row filter">
        <div className="col s8 offset-s2 container filter-content z-depth-3">
            <div className="input-field">
            <i className="material-icons prefix">search</i>
            <input id="autocomplete" type="text" name="autocomplete" className="autocomplete" onChange={handleInputChange}/>
            <label htmlFor="autocomplete">Busqueda</label>
            </div>        
        </div>
    </div>
  );
}