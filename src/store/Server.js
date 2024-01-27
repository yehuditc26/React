
import axios from 'axios';
import AppStore from './AppStoreLogin';
import AppStoreService from './AppStoreService';

export async function login(name, password) {
    // console.log(0);
    try {
        const res = await axios.post('http://localhost:8787/login', { name, password });
        console.log(res);
        if (res.status === 200) {
            AppStore.setIsLogin(true);
            return 'success';
        } else {
            console.log(res.status);
            return 'failed';
        }

    } catch (error) {
        console.log(error);
        if (error.response.status === 401)
            console.log(401)
        return 'failed';
    }
}

export async function addService(service) {
    // console.log("service: ",service);
    try {
        const res = await axios.post('http://localhost:8787/service',service);
        // console.log(res);
        if (res.status === 200) {
            AppStoreService.setService(service)
            return 'success';
        }

    } catch (error) {
        console.log("res: ",error);
        if (error.status === 401)
            console.log(401)
        else {
            console.log(error.status)
        }
        return 'failed';
    }
}

export async function getServices() {
    try {
        const res = await axios.get('http://localhost:8787/services');
        console.log(res.data);
        if (res.status === 200) {
            const services = res.data
            AppStoreService.getService(services)
            return 'success';
        }

    } catch (error) {
        console.log("res: ",error);
        if (error.status === 401)
            console.log(401)
        else {
            console.log(error.status)
        }
        return 'failed';
    }
}
