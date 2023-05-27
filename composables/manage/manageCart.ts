let constCart = 'none';
let working = false;
let selectedSet = new Set();

export const activateCart=(name:string)=>{
    resetCart();
    constCart=name;
    working=true;
}

export const addCart=(list:[],name:string)=>{
    if(working && name==constCart){
        list.filter(item=>!selectedSet.has(item["id"])).forEach(item=>{
            selectedSet.add(item["id"]);
            // @ts-ignore
            useState('cart').value.push(item);
        })
        return ;
    }else{
        return ;
    }


}

function resetCart(){
    constCart = 'none';
    working = false;
    selectedSet = new Set();
}