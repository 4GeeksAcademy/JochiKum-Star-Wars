import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


export const Starships = () => {
    const { store, actions } = useContext(Context);

    const handleError = (event) => {
        event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
    }

    const handleFavorite = (element) => {
        const newFavorite = {
            name: element.name,
            type: 'starships'
        }
        actions.addFavorites(newFavorite);
    }
    return (
        <div className="container my-3 bg-dark">
            <h1 className="text-center text-warning p-3">Starships</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2">
                {store.starships.map((item) =>
                    <div key={item.uid} className="col">
                        <div className="card border-dark my-3 mx-2 text-bg-dark">
                            <img src={`https://starwars-visualguide.com/assets/img/starships/${item.uid}.jpg`} className="card-img-top" alt="..."
                                onError={handleError} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <div className="d-flex justify-content-between">
                                    <Link to={`/starships/${item.uid}`} className="btn btn-secondary p-2">Detalles</Link>
                                    <span className="btn btn-outline-danger" onClick={() => handleFavorite(item)}>
                                        <i className="far fa-heart fa-lg "></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
