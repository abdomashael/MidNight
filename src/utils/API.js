import Axios from "axios";
export const getPage =async (type, sorting, pageNo)=>{
    return await Axios.get(
        process.env.REACT_APP_API_URL +
        `/discover/${type}/?sorted_by=${sorting}&page=${pageNo}`
    )
}


