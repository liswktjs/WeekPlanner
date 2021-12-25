import { KEY_DONE, KEY_PLANLIST } from "../constants/todayStorageConstants";
import store from "../store/store.js";

function getDoneCount(planList){
    return planList.reduce((acc,cur) => {
        if(cur[KEY_DONE] == true){
            return acc++;
        }
    },0);
}

export default function getAchivementValue(storagename){
    const storage = store.getLocalStorage(storagename);
    if(storage){
        const planList = storage[KEY_PLANLIST];
        return getDoneCount(planList) / planList.length;
    }else{
        return 0;
    }
    
}