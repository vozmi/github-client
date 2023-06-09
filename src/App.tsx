import { useEffect } from "react";
import "./App.css";
import { apiClient } from "./api";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PageHome, PageRepo } from "./pages";

function App() {
    const getData = async () => {
        const data = await apiClient.getUserRepos("vozmi");
        console.debug(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Routes>
                <Route
                    element={
                        <div>
                            <h1>Layout</h1>
                            <Outlet />
                        </div>
                    }
                >
                    <Route path="repos">
                        <Route path=":id" element={<PageRepo />} />
                        <Route index element={<Navigate to="/" />} />
                    </Route>
                    <Route index element={<PageHome />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
