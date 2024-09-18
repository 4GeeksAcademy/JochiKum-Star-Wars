import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { CardsCollection } from "../component/CardsCollection.jsx";

export const Planets = () => {
    const { store } = useContext(Context);
    
    return <CardsCollection data={store.planets} title={'Planets'} model={'planets'} />
}