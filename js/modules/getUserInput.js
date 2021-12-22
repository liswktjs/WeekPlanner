import {$} from '../dom/dom.js';
import checkUserInputEmpty from './checkUserInputEmpty.js';
export default function getUserInput(){
    let userInput = false;
    if(checkUserInputEmpty($('.plan-plus-input').value)){
        userInput = $('.plan-plus-input').value;
    }
    return userInput;
}