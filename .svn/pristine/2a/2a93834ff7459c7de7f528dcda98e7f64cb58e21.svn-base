export const mainViewDockerItem = (callback: any[],init:any[]) => {

    const data= useState('mainViewDockerItem',()=>[
            init[0],
            init[1]

    ]);
    return data;
};

export const dockSwitch = () =>{
    return useState('dockSwitch',()=>true)
}

export const showDialogInfo = (opt:any,check:boolean) => {
    if(check){
        const data= useState(opt.dialog,()=>[
        ]);
        return data;
    }else{
        // @ts-ignore
        return useState(opt.dialog).value[0]=h(opt.resovle);
    }
};

