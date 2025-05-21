import App from "@renderer/App";
import { useEffect, useState } from "react";
import { HashRouter, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { navigateTo, setNavigate } from "./navigate";

export default function AppRouter() {
    return (<HashRouter>
        <AppRoute />
    </HashRouter>);
}

function AppRoute() {
    const navigate = useNavigate();

    useEffect(() => {
      setNavigate(navigate);
    }, [navigate]);
    
    return (<Routes>
        <Route index element={ <App /> } />
        <Route path="/login" element={ <div>Login Page</div> } />
        <Route path="/modules" element={ <ModulesLayout /> } >
            <Route index element={ <div>Base Module</div> } />
            <Route path="password" element={ <div>Password Module</div> } />
        </ Route>
    </Routes>);
}

function ModulesLayout() {
    const [userKey, setUserKey] = useState<string>(window.api.test());
    
    return (
        <div>
            <h1>Modules Page</h1>
            <Outlet />
            <button onClick={() => { navigateTo("modules/password"); }}>Click Me</button>

            <div>{userKey}</div>
            <button onClick={() => { setUserKey(window.api.test()); }}>Change User Key</button>
        </div>
    );
}