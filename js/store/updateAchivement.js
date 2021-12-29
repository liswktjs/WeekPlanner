import { KEY_ACHIVEMENT, KEY_PLANLIST } from "../constants/todayStorageConstants.js";
import getDate from "../modules/getDate.js";
import getDateIndex from "../modules/getDateIndex.js";
import getWeek from "../modules/getWeek.js";
import store from "./store.js";

function getDoneCount(planList){
    return planList.reduce((acc,cur) => {
        if(cur[KEY_DONE] == true){
            return acc++;
        }
    },0);
}

export default function updateAcivement(storagename){
    let oddStorage = store.getStorage(storagename);
    const dateIndex = getDateIndex(storagename);
    const storageIndex = getStorageIndex(storagename, dateIndex);
    const planList = oddStorage[storageIndex][KEY_PLANLIST];
    const doneCount = getDoneCount(planList);
    if(doneCount === 0){
        oddStorage[storageIndex][KEY_ACHIVEMENT] = 0;
    }else{
        oddStorage[storageIndex][KEY_ACHIVEMENT] = (doneCount) / planList.length;
    }
    store.setLocalStoreage(storagename,oddStorage);

}