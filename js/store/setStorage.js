import { KEY_PLANLIST, TODAY_STORAGE_NAME } from "../constants/todayStorageConstants.js"; 
import getDateIndex from "../modules/getDateIndex.js";
import getDay from "../modules/getDay.js";
import getStorageIndex from "../modules/getStorageIndex.js";
import store from "./store.js";

function createStoreCompoent(storagename, newElement){
    
    if(storagename === TODAY_STORAGE_NAME){
        const newStore = {
            index : getDateIndex(storagename),
            day : getDay(),
            planlist : [newElement],
            achivement: 0,
        }
        return newStore
    }else{
        const newStore = {
            index : getDateIndex(storagename),
            planlist: [newElement],
            achivement: 0,
        }
        return newStore
    }
}


export default function setStorage(storagename, value){
    let oddStorage = store.getLocalStorage(storagename);
    const newElement = {
        plan : value,
        done: false
    }

    if(oddStorage){
        const index = getDateIndex(storagename);
        const storageIndex = getStorageIndex(oddStorage, index);
        oddStorage[storageIndex][KEY_PLANLIST].push(newElement);
        
        store.setLocalStoreage(storagename,oddStorage);
        
    }else{
        store.setLocalStoreage(storagename, [createStoreCompoent(storagename, newElement)]);
    }
    
    

}