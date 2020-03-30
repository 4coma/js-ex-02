const mType = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05];
const mNb = [];
var newVal = 0;

var input = 23501;
newVal = input;


for (var i = 0; i < mType.length; i++){
  mNb.push(Math.trunc(newVal / mType[i]));
  newVal = newVal - (mNb[i] * mType[i]);
};

console.log(mNb);
