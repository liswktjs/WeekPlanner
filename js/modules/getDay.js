import { DAYLIST } from "../constants/constants.js";

export default function getDay(){
    const date = new Date();
    const day = date.getDay();
    return DAYLIST[day];
}