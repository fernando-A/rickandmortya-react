import React from 'react';
import './buttons.scss';
import {getData, } from '../../utils/callServices';
import { useSelector, useDispatch } from 'react-redux'


export default function Bottons() {

    const characterInfo = useSelector((state) => state.characterInfo)
    console.log(characterInfo)
    const dispatch = useDispatch()

    const getCharacteresNext = () =>{
        getData(characterInfo.next).then(result =>{
            if(result!==null){
                dispatch({
                    type: 'SET_CHARACTER_LIST',
                    payload: result
                })
            }	      
        });
    }

    const getCharacteresPrev = () =>{
        getData(characterInfo.prev).then(result =>{
            if(result!==null){
                dispatch({
                    type: 'SET_CHARACTER_LIST',
                    payload: result
                })
            }	      
        });
    }
    

  return (
      <div>
        { characterInfo.next !== null ? <p className="btn-floating btn-large waves-effect waves-light cyan right btn-right" onClick={getCharacteresNext}><i className="material-icons">chevron_right</i></p> : "" }
        { characterInfo.prev !== null ? <p className="btn-floating btn-large waves-effect waves-light cyan left btn-left" onClick={getCharacteresPrev}><i className="material-icons">chevron_left</i></p>: "" }
      </div>

  );
}