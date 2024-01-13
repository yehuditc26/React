import axios from 'axios';
import AppStore from './AppStore';
import ErrorLogin from '../components/Admin/ErrorLogin';

export async function login(name, password) {
    const res = await axios.post('http://localhost:8787/login', { name, password });
    console.log(res)
    if (res.status === 200) {
        // dataStore.addService(service);
        console.log(res)
        AppStore.setIsLogin(true)
        return 'success';
    }
    else {
        if(res.status === 401)
        // <p>kfhdsk</p>
        console.log(5)
        return 'failed';
        
    }
}