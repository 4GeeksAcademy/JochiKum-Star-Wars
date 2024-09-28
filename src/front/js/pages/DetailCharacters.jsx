import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Spinner } from "../component/Spinner.jsx";

export const DetailCharacters = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    console.log(params);

    useEffect(() => {
        actions.getCharacterDetails(params.uid)
    }, [])


    return (
        <div className="container bg-dark">
                {!store.currentCharacter.name ?
                    <Spinner />
                    :
                        <div className="card mb-3 bg-dark">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8 text-white">
                                    <div className="card-body">
                                        <h1 className="text-center color-white">{store.currentCharacter.name}</h1>
                                        <p><strong>Height: </strong> {store.currentCharacter.height}</p>
                                        <p><strong>Mass: </strong>{store.currentCharacter.mass}</p>
                                        <p><strong>Hair color: </strong> {store.currentCharacter.hair_color}</p>
                                        <p><strong>Skin color: </strong>{store.currentCharacter.skin_color}</p>
                                        <p><strong>Eye color: </strong> {store.currentCharacter.eye_color}</p>
                                        <p><strong>Birth year: </strong> {store.currentCharacter.birth_year}</p>
                                        <p><strong>Gender: </strong> {store.currentCharacter.gender}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
    )
}