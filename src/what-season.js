module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';

try {date.getTime()} catch(err) {throw new Error(err)}
const m = date.getMonth();
if ((m>=2)&&(m<=4)) return ('spring')
if ((m>=5)&&(m<=7)) return ('summer')
if ((m>=8)&&(m<=10)) return ('fall')
if ((m>=11)||(m<=1)) return ('winter')  
};
