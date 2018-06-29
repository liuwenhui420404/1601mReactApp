import {
    ADDNUM,
    AJAX,
    AJAXDATA
} from "./type"
import axios from 'axios'
export default {
    [ADDNUM](text){
        return {
            type:ADDNUM,
            text:text
        }
    },
    [AJAX](text){
        return {
            type:AJAX,
            text:text
        }
    },
    [AJAXDATA](text){
        return (dispatch)=>{
            axios.get('/api/data').then(data=>{
                //console.log(data)
                dispatch(this[AJAX](data.data))
            })
        }
    }
}
