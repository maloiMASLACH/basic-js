module.exports = function countCats(arr) {
  var k=0;
  for (var i=0;i<arr.length;i++)
  {
    for (var j=0;j<arr[i].length;j++)
      {
        if (arr[i][j]=='^^')
          {
            k++;
          }
      } 
  }
  return k;
     }
     