
class AppStoreBusinessData {

    businessData ={};

    constructor() {

    }

    getbusinessDetails = (businessData) => {

        this.businessData= businessData
    }

    addbusinessDetails = (businessData) => {
        this.businessData= businessData
    }

    editbusinessDetails = (businessData) => {
        this.businessData= businessData
    }
}

export default new AppStoreBusinessData();//יצירת מופע יחיד שאליו תמיד נפנה
