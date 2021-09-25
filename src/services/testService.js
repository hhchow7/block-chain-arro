import instance from "./api";

let path = "/markets";

export default {
    getTest: () => {
        return instance({
            method: 'GET',
            url: path,
            withCredentials: true,
        }).then(res => {
            console.log(res)
            return res;
        }).catch(err=>{
            return err;
        })
    }
}
