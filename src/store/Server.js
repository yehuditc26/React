// import axios from 'axios';
// import AppStore from './AppStore';

// export async function login(name, password) {
//     console.log(0)
//     const res = await axios.post('http://localhost:8787/login', { name, password });
//     console.log(res)
//     if (res.status === 200) {
//         AppStore.setIsLogin(true)
//         return 'success';
//     }

//     else {
//         if (res.status === 401)
//             console.log(res.status)
//         return 'failed';

//     }
// }
import axios from 'axios';
import AppStore from './AppStore';

export async function login(name, password) {
    console.log(0);
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
        if(error.response.status===401)
            console.log(401)
        return 'failed';
    }
}
