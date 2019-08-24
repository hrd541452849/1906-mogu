// 引入api与请求方法
import api from '../../utils/api'
import {get} from '../../utils/request'


// state
const initialState = {
    // 当前列表id
    pid: 0,
    fcid: 0,
    // 当前排序方式
    sort: "",
    // 分类左侧列表
    categoryLeft: [],
    // 分类右上列表
    categoryRightTop: []
};

// type
// 分类左侧数据列表
const GET_CATEGORY_LEFT =  'mall/get_category_left';
// 分类右上数据列表
const GET_CATEGORY_RIGHT_TOP =  'mall/get_category_right_top';

// 设置当前id
const GET_PID =  'mall/get_pid';
const GET_FCID =  'mall/get_fcid';
// 设置当前排序方式
// const GET_SORT =  'mall/get_sort';


// reducer
export default (state = initialState, action)=>{
    switch (action.type) {
        case GET_CATEGORY_LEFT:
            return {
                ...state,
                categoryLeft: [...action.value]
            };
        case GET_CATEGORY_RIGHT_TOP:
        return {
            ...state,
            categoryRightTop: [...action.value]
        };
        case GET_PID:
        return {
            ...state,
            pid: [...action.value]
        };
        case GET_FCID:
        return {
            ...state,
            fcid: [...action.value]
        };
        default:
            return state;
    }
};

// 同步actions

// 请求分类左侧栏数据
export const setCategoryLeftData = (value)=>({
    type: GET_CATEGORY_LEFT,
    value
});
// 分类右上数据列表
export const setCategoryRightTopData = (value)=>({
    type: GET_CATEGORY_RIGHT_TOP,
    value
});
// pid
export const setPid = (value)=>({
    type: GET_PID,
    value
});
// fcid
export const setfcid = (value)=>({
    type: GET_FCID,
    value
});


// 异步actions 
// 请求分类左侧栏数据
export const requestCategoryLeftData = () => async (dispatch) => {
    try {
        // 异步操作,发送请求
        let result = await get(api.CATEGORY_LEFT_API);
        // 整理数据
        let newData = JSON.parse(result.slice(5,-1)).data[117330].list;
        console.log(newData[0].maitKey)
        // 修改状态
        dispatch(setCategoryLeftData(newData));
        // 初始化pid
        dispatch(setPid(newData[0].maitKey))
    } catch (error) {
        // requestCategoryLeftData('重新发送'));
        console.log('发送失败',error);
    }    
}

// 请求分类右上数据
export const requestCategoryRightTopData = (pid) => async (dispatch) => {
    try {
        // 异步操作,发送请求
        console.log('开始请求');
        let result = await get(api.CATEGORY_RIGHT_TOP_API,{pid});
        console.log('取得数据');
        console.log(result);
        
        // let newData = JSON.parse(result.slice(5,-1)).data[117330].list;
        // console.log(newData);
        // dispatch(setCategoryRightTopData(newData));
    } catch (error) {
        // requestCategoryLeftData('重新发送'));
        console.log('发送失败',error);
    }    
}