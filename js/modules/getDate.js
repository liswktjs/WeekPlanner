export default function getDate(){
    let now = new Date();
    let y = now.getFullYear();
    let m = now.getMonth() + 1;
    if (m < 10){
        m = '0' + m;
    }
    let d = now.getDate();
    if (d < 10) {
        d = '0' + d;
    }
    return [y,m,d];
}