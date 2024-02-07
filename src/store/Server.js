import axios from 'axios';
import AppStore from './AppStoreLogin';
import AppStoreService from './AppStoreService';
import AppStoreMeeting from './AppStoreMeeting';
import AppStoreBusinessData from './AppStoreBusinessData';

//login
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

//business details
export async function addBusinessDetails(businessData) {
    // console.log("service: ",service);
    try {
        const res = await axios.post('http://localhost:8787/businessData', businessData);
        // console.log(res);
        if (res.status === 200) {
            AppStoreBusinessData.addbusinessDetails(businessData)
            return 'success';
        }

    } catch (error) {
        console.log("res: ", error);
        if (error.status === 401)
            console.log(401)
        else {
            console.log(error.status)
        }
        return 'failed';
    }
}

export async function editBusinessDetails(businessData) {
    // console.log("service: ",service);
    try {
        const res = await axios.put('http://localhost:8787/businessData', businessData);
        // console.log(res);
        if (res.status === 200) {
            AppStoreBusinessData.editbusinessDetails(businessData)
            return 'success';
        }

    } catch (error) {
        console.log("res: ", error);
        if (error.status === 401)
            console.log(401)
        else {
            console.log(error.status)
        }
        return 'failed';
    }
}

export async function getBusinessDetails() {
    try {
        const res = await axios.get('http://localhost:8787/businessData');
        console.log("bs get: ",res.data);
        if (res.status === 200) {
            const businessData = res.data
            AppStoreBusinessData.getbusinessDetails(businessData)
            return 'success';
        }

    } catch (error) {
        console.log("res: ", error);
        if (error.status === 401)
            console.log(401)
        else {
            console.log(error.status)
        }
        return 'failed';
    }
}

//services
export async function addService(service) {
    // console.log("service: ",service);
    try {
        const res = await axios.post('http://localhost:8787/service', service);
        // console.log(res);
        if (res.status === 200) {
            AppStoreService.setService(service)
            return 'success';
        }

    } catch (error) {
        console.log("res: ", error);
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
        console.log("res: ", error);
        if (error.status === 401)
            console.log(401)
        else {
            console.log(error.status)
        }
        return 'failed';
    }
}

//meetings
export async function addMeeting(meeting) {
    // console.log("service: ",service);
    try {
        const res = await axios.post('http://localhost:8787/appointment', meeting);
        // console.log(res);
        if (res.status === 200) {
            AppStoreMeeting.setMeeting(meeting)
            return 'success';
        }

    } catch (error) {
        console.log("res: ", error);
        if (error.status === 401)
            console.log(401)
        else {
            console.log(error.status)
        }
        return 'failed';
    }
}

export async function getMeeting() {
    try {
        const res = await axios.get('http://localhost:8787/appointments');
        console.log(res.data);
        if (res.status === 200) {
            const meeting = res.data
            AppStoreMeeting.getMeeting(meeting)
            return 'success';
        }

    } catch (error) {
        console.log("res: ", error);
        if (error.status === 401)
            console.log(401)
        else {
            console.log(error.status)
        }
        return 'failed';
    }
}
