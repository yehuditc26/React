import { observable, makeObservable, action } from 'mobx';

class AppStore {
    isLogin = false;

    constructor() {
        makeObservable(this, {
            isLogin: observable,
            setIsLogin: action,
        })
    }

    setIsLogin = (val) => {

        this.isLogin = val;

    }

}

export default new AppStore();//יצירת מופע יחיד שאליו תמיד נפנה


// import React from 'react';
// import { observer } from 'mobx-react';
// import appStore from './AppStore';

// const LoginButton = observer(() => {
//   const handleLogin = () => {
//     appStore.setIsLogin(true);
//   };

//   return (
//     <button onClick={handleLogin}>Login</button>
//   );
// });

// export default LoginButton;
