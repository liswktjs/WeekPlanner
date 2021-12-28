import { KEY_PLANLIST, TODAY_STORAGE_NAME } from "../constants/todayStorageConstants.js";
import {WEEK_STORAGE_NAME} from '../constants/weekStorageConstants.js';
import getDate from "../modules/getDate.js";
import getDay from "../modules/getDay.js";
import getStorageIndex from "../modules/getStorageIndex.js";
import getWeek from "../modules/getWeek.js";
import store from "./store.js";

function createStoreCompoent(storagename, newElement){
    
    if(storagename === TODAY_STORAGE_NAME){
        const newStore = {
            index : getIndex(storagename),
            day : getDay(),
            planlist : [newElement],
            achivement: 0,
        }
        return newStore
    }else{
        const newStore = {
            index : getIndex(storagename),
            planlist: [newElement],
            achivement: 0,
        }
        return newStore
    }
}

function getIndex(storagename){
    
    if(storagename === TODAY_STORAGE_NAME){
        const indexList = getDate();
        return indexList.join('');
    }else{
        const time = new Date();
        const weekNo = getWeek(time);
        return weekNo.join('');
    }
    
}

export default function setStorage(storagename, value){
    let oddStorage = store.getLocalStorage(storagename);
    const newElement = {
        plan : value,
        done: false
    }

    if(oddStorage){
        const index = getIndex(storagename);
        const storageIndex = getStorageIndex(oddStorage, index);
        oddStorage[storageIndex][KEY_PLANLIST].push(newElement);
        
        store.setLocalStoreage(storagename,oddStorage);
        
    }else{
        store.setLocalStoreage(storagename, [createStoreCompoent(storagename, newElement)]);
    }
    
    

}