import { KEY_PLANLIST, TODAY_STORAGE_NAME } from "../constants/todayStorageConstants.js";
import {WEEK_STORAGE_NAME} from '../constants/weekStorageConstants.js';
import getAchivementValue from "../modules/getAchivementValue.js";
import getDate from "../modules/getDate.js";
import getDay from "../modules/getDay.js";
import store from "./store.js";

function createTodayStorage(storagename){
    if(storagename === TODAY_STORAGE_NAME){
        const newStore = {
            index : getDate(),
            day : getDay(),
            planlist : [],
            achivement: getAchivementValue(TODAY_STORAGE_NAME)
        }
        return newStore
    }else{
        const newStore = {
            index : getDate(),
            planlist: [],
            achivement: getAchivementValue(WEEK_STORAGE_NAME)
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
        
        store.setLocalStoreage(storagename,oddStorage[KEY_PLANLIST].push(newElement));
    }else{
        store.setLocalStoreage(storagename, [])
    }
    
    

}