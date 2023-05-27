import {managementViewKey} from "~/composables/managementViewKey";
import getCurrentViewKey from "~/composables/getCurrentViewKey";

export default (current:boolean,id:string) =>{
    let result;
    // @ts-ignore
    let target  : managementViewKey= useState('viewKey').value;
    if(current){
        // @ts-ignore
        id=getCurrentViewKey();
    }
    if(target.viewKeySet.has(id)){
        result = target.viewKeyArr.filter(view=>view.id==id)[0];
    }else{
        return null;
    }
    return result;
}

