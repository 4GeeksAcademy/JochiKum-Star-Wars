import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const PlanetsDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    const handleError = (event) => {
        event.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
    }

    useEffect(() => {
        actions.getPlanetsDetails(params.uid)
    }, [])


    return (
        <div className="container bg-dark">
            <div className="card my-2  bg-dark text-light">
                <div className="row g-0">
                    <div className="col-md-7 col-lg-6 col-xl-5">
                        <img onError={handleError} className="img-fluid rounded-start" src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`} />
                    </div>
                    <div className="col-md-5 col-lg-6 col-xl-7">
                        <div className="card-body">
                            <h1>{store?.planetDetails?.properties?.name}</h1>
                            <p><strong>diameter: </strong>{store?.planetsDetails?.properties?.diameter}</p>
                            <p><strong>rotation period: </strong>{store?.planetsDetails?.properties?.rotation_period}</p>
                            <p><strong>Orbital Period: </strong>{store?.planetsDetails?.properties?.orbital_period}</p>
                            <p><strong>Gravity: </strong>{store?.planetsDetails?.properties?.gravity}</p>
                            <p><strong>Population: </strong>{store?.planetsDetails?.properties?.population}</p>
                            <p><strong>Climate: </strong>{store?.planetsDetails?.properties?.climate}</p>
                            <p><strong>Terrain: </strong>{store?.planetsDetails?.properties?.terrain}</p>
                            <p><strong>Surface Water: </strong>{store?.planetsDetails?.properties?.surface_water}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
