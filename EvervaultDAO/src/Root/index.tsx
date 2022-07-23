import React, { useEffect, useState } from "react";
import App from "./App";
import Landing from "./Landing";
import { BrowserRouter } from "react-router-dom";
import { loadTokenPrices } from "../helpers";
import Loading from "../components/Loader";

function Root() {
    const isApp = (): boolean => {
        return window.location.pathname != "/";
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadTokenPrices().then(() => setLoading(false));
    }, []);

    if (loading) return <Loading />;

    const app = () => (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );

    return isApp() ? app() : <Landing />;
}

export default Root;
