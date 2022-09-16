
import React from "react";
import ResponsiveAppBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
function Home() {
    return (
        <>
            <ResponsiveAppBar />

            <ItemDetailContainer />
        </>
    );
}

export default Home;