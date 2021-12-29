import { TODAY_STORAGE_NAME } from "../constants/todayStorageConstants.js";
import getDate from "./getDate.js";
import getWeek from "./getWeek.js";

export default function getDateIndex(storagename){
    if(storagename === TODAY_STORAGE_NAME){
        return getDate().join('');
    }else{
        const time = new Date();
        return getWeek(time).join('');
    }
}