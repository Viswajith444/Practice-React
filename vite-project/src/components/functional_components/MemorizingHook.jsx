import { useEffect, useState } from "react"

const useMemoize =(key,value)=>{
    var[text,setText]=useState(()=>{
        var jsonval=localStorage.getItem(key);
        if(jsonval!=null){
            return jsonval;
        }
    });

    useEffect(()=>{
        localStorage.setItem(key,value)
    },[key,value])
    return [text,setText];
};
export default useMemoize;