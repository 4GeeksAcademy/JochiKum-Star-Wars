import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
// Custom component
import ScrollToTop from "./component/ScrollToTop.jsx";
import { BackendURL } from "./component/BackendURL.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
// Custom Pages or Views
import { Home } from "./pages/Home.jsx";
import { Demo } from "./pages/Demo.jsx";
import { Single } from "./pages/Single.jsx";
import { Contact } from "./pages/Contact.jsx";
import { EditContact } from "./component/EditContact.jsx";
import { AddContact } from "./component/AddContact.jsx";
import { Characters } from "./component/Characters.jsx";
import { DetailCharacters } from "./pages/DetailCharacters.jsx";
import { Spinner } from "./component/Spinner.jsx";
import { Inicio } from "./pages/Inicio.jsx";
import { Planets } from "./pages/Planets.jsx";
import { PlanetsDetails } from "./component/PlanetsDetails.jsx";
import { Starships } from "./component/Starships.jsx"
import { StarshipDetails } from "./component/StarshipDetails.jsx";




// Create your first component
const Layout = () => {
    // The basename is used when your project is published in a subdirectory and not in the root of the domain
    // You can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";
    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home/>} path="/"/>
                        <Route element={<Demo/>} path="/demo"/>
                        <Route element={<Single/>} path="/single/:theId"/>
                        <Route element={<h1>Not found!</h1>} path="*"/>
                        <Route element={<Contact/>} path="/contact"/>
                        <Route element={<AddContact />} path="/add-contact"/>
                        <Route element={<EditContact/>} path="/edit-contact"/>
                        <Route element={<Inicio/>} path="/Inicio/"/>
                        <Route element={<Characters/>} path="/characters"/>
                        <Route element={<Spinner/>} path="/spinner" />
                        <Route element={<DetailCharacters/>} path="/characters/:uid"/>
                        <Route element={<Planets/>} path="/planets" />
                        <Route element={<PlanetsDetails/>} path="/planets/:uid"/>
                        <Route element={<Starships/>} path="/starships"/>
                        <Route element={<StarshipDetails/>} path="/starships/:uid"/>
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div >
    );
};

export default injectContext(Layout);
