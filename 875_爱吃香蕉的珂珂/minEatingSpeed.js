/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let leftSpeed = 1;
    // 最多的一堆香蕉有多少根为最大速度
    let rightSpeed = Math.max(...piles);

    while(leftSpeed <= rightSpeed){
        let midSpeed = Math.floor(leftSpeed + (rightSpeed - leftSpeed) / 2);
        // midSpeed速度时需要多少时间
        let T = piles.map(item=>Math.ceil(item/midSpeed)).reduce((prev, cur)=>prev+cur, 0);
        if(T <= h){
            rightSpeed = midSpeed - 1;
        }else if(T > h){
            leftSpeed = midSpeed + 1;
        }
    }
    return leftSpeed;
};


let test1 = [30,11,23,4,20];
let test2 = [30,11,23,4,20];
console.log(minEatingSpeed(test1, 5));
console.log(minEatingSpeed(test2, 6));