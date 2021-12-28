import { KEY_INDEX } from "../constants/weekStorageConstants.js";

export default function getStorageIndex(oddStorage, _index){
    let index = 0;
    for(let i = 0; i < oddStorage.length; i++){
        if(oddStorage[i][KEY_INDEX] === _index){
            index = i;
        }
    }
    return index;
}