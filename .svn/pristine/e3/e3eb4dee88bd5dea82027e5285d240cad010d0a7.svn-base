import {default as mc } from '~/data/menu/menuConfig.json';
export const getDataFromURL = (url:string,query:object)=>{
    let result;
    if(url=='menuList'){
        result=mc
    }
    return result;
};


export const getPermission = (url:string,opt:permissionOption)=>{
    let result;
    if(url=='partSearch'){
        if(opt.fromPage=='bomEdit'){
            result={
                create:false,
                add:true,
                bom:true,
            }
        }else{
            result={
                create:true,
                add:false,
                bom:false,
            }
        }
    }

    return result;
};

interface permissionOption{
    fromPage:string
}