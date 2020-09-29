import React, { useEffect } from 'react';
import './leading.scss';
import {getData, } from '../../utils/callServices';
import Character from '../character/character';
import Filter from '../filter/filter';
import { useSelector, useDispatch } from 'react-redux'



export default function Leading() {

    const dispatch = useDispatch()
    const characterList = useSelector((state) => state.characterList)

    useEffect(() => {
        getData("https://rickandmortyapi.com/api/character/").then(result =>{
            if(result!==null){
                dispatch({
                    type: 'SET_CHARACTER_LIST',
                    payload: result
                })
            }	      
        });

    }, [dispatch])


  return (
    <header className="App-header">
        <Filter/>
        <div className="row">
            <div className="col s10 offset-s1 container z-depth-3">
                {
                    characterList.map(({id, name, image, species, gender}) => {
                        return(
                            <div key={id}>
                            <Character
                            id = {id}
                            name = {name}
                            image = {image}
                            species = {species}
                            gender = {gender}
                            />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </header>
  );
}