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

    setMeeting = (meeting) => {
        console.log("meetings:", this.meetings);
        this.meetings.push(meeting);
        console.log("meetings:", this.meetings);
    }
}

export default new AppStoreMeeting();//יצירת מופע יחיד שאליו תמיד נפנה
