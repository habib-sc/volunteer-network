import axios from 'axios';
import { useEffect, useState } from 'react';

const useUserInfo = (email) => {
    const [userInfo, setUserInfo] = useState({});
    useEffect( () => {
        ( async () => {
            const url = `http://localhost:5000/user/${email}`;
            const { data } = await axios.get(url);
            setUserInfo(data);
        })();
    }, [email]);

    return [userInfo, setUserInfo];
};

export default useUserInfo;