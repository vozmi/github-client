import { useEffect } from "react";
import "./App.css";
import { apiClient } from "./api";

function App() {
    const getData = async () => {
        const data = await apiClient.getUserRepos("vozmi");
        console.debug(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return <div>test</div>;
}

export default App;
