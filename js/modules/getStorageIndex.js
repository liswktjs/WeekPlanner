import { KEY_INDEX } from "../constants/weekStorageConstants.js";

export default function getStorageIndex(oddStorage, _index){
    let find_index = false;
    for(let i = 0; i < oddStorage.length; i++){
        if(oddStorage[i][KEY_INDEX] === _index){
            find_index = i;
        }
    }
    if(find_index !== false){
        return find_index;
    }else{
        return false;
    }
}