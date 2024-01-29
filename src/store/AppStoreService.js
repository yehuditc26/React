import { observable, makeObservable, action } from 'mobx';
import { getServices } from './Server';

class AppStoreService {

    services = [];

    constructor() {
        makeObservable(this, {
            services: observable,
            setService: action,
            getService: action

        })
        
        getServices();

    }

    getService = (services) => {

        this.services= services
        console.log("services:", this.services);
    }

    setService = (service) => {
        this.services.push(service);
        console.log("services:", this.services);
    }

  
    

}

export default new AppStoreService();//יצירת מופע יחיד שאליו תמיד נפנה
