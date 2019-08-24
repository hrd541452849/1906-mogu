// import 'whatwg-fetch'

// export const get = async (url, params = {})=>{
//     try {
//         // 处理参数
//         let paramsStr = '';
//         Object.entries(params).forEach(([key, value], index)=>{
//             paramsStr += (index === 0) ? '?' : '&';
//             paramsStr += `${key}=${encodeURIComponent(value)}`;
//         })
//         // 发送请求,得到响应对象
//         let response = await fetch(`${url}${paramsStr}`);
//         // 解析数据，当成文本解析
//         console.log(response)
//         let result = await response.json();
//         // 解析完成，得到结果
//         if(result.state === 'SUCCESS'){
//             return result;
//         }else{
//             throw result;
//         }
//     } catch (error) {
//         throw error;
//     }
// }

// export const post = async (url, params = {})=>{
//     try {
//         // 发送请求
//         let response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json;charset=UTF-8'
//             },
//             body: JSON.stringify(params)
//         });
//         // 接收到响应，处理数据
//         let result = await response.json();
//         if(result.state === 'SUCCESS'){
//             return result;
//         }else{
//             throw result;
//         }
//     } catch (error) {
//         throw error;
//     }
// }

// export default {
//     get,
//     post
// }
import axios from 'axios'

export const get = (url, params = {})=>{
    return new Promise((resolve, reject)=>{
        axios.get(url, {
            params: params,
            baseURL: 'http://localhost:3000'
        })
        .then(response=>{
            if(response.status === 200){
                resolve(response.data);
            }else{
                console.log('请求失败');
            }
        })
        .catch(error=>{
            console.log('请求失败');    
        })
    })
}

export const post = async (url, params = {})=>{
    try {
        let response = await axios.post(url, params, {
            baseURL: 'http://localhost:3000'
        });
        if(response.status === 200){
            return response.data;
        }else{
            throw new Error();
        }
    } catch (error) {
        console.log('请求失败');        
    }
}

export default {
    get,
    post
}