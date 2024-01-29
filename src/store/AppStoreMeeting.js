import { observable, makeObservable, action } from 'mobx';
import { getMeeting } from './Server';

class AppStoreMeeting {

    meetings = [];

    constructor() {
        makeObservable(this, {
            meetings: observable,
            setMeeting: action,
            getMeeting: action

        })
        
        getMeeting();

    }

    getMeeting = (meetings) => {

        this.meetings= meetings
        console.log("meetings:", this.meetings);
    }

    setMeeting = (meetings) => {
        this.services.push(meetings);
        console.log("meetings:", this.meetings);
    }
}

export default new AppStoreMeeting();//יצירת מופע יחיד שאליו תמיד נפנה
