import axios from "axios";
import { useEffect, useState } from "react";

const useVnEvents = () => {
    const [vnEvents, setVnEvents] = useState([]);
    
    useEffect( () => {
        (async () => {
            const { data } = await axios.get('http://localhost:5000/events');
            setVnEvents(data);
        })();
    }, []);
    
    return [vnEvents, setVnEvents];
};

export default useVnEvents;