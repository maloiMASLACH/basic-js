module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let c={};
 c.turns= Math.pow(2,disksNumber)-1;
c.seconds=Math.floor(c.turns/turnsSpeed*3600);
    return c

}