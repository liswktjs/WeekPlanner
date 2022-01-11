import { KEY_ACHIVEMENT, KEY_PLANLIST, KEY_DONE } from "../constants/todayStorageConstants.js";
import getDateIndex from "../modules/getDateIndex.js";
import store from "./store.js";
import getStorageIndex from "../modules/getStorageIndex.js";
function getDoneCount(planList){
    return planList.reduce((acc,cur) => {
        if(cur[KEY_DONE] == true){
            return acc++;
        }
    },0);
}

export default function updateAcivement(storagename){
    let oddStorage = store.getLocalStorage(storagename);
    const dateIndex = getDateIndex(storagename);
    const storageIndex = getStorageIndex(oddStorage, dateIndex);
    const planList = oddStorage[storageIndex][KEY_PLANLIST];
    const doneCount = getDoneCount(planList);
    if(doneCount === 0){
        oddStorage[storageIndex][KEY_ACHIVEMENT] = 0;
    }else{
        oddStorage[storageIndex][KEY_ACHIVEMENT] = (doneCount) / planList.length;
    }
    store.setLocalStoreage(storagename,oddStorage);
}