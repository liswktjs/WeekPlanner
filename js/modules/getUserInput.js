import {$} from '../dom/dom.js';
import checkUserInputEmpty from './checkUserInputEmpty.js';
export default function getUserInput(type){
    let userInput = false;
    if(checkUserInputEmpty($(`.${type}-plan-input`).value)){
        userInput = $('.plan-plus-input').value;
    }
    return userInput;
}