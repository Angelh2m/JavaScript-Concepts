function formatPhoneNumber(num){
  var number =  num.toString().replace(/\D/g, '');
  console.log(number)
  var char = {
    0: '(',
    3: ') ',
    6: ' - '
  };

  var num = '';
  for(var i = 0; i < number.length; i++){
    console.log(i);
    num += ( char[i] || '') + number[i];
  }
  // console.log(mdn);
  return num;
}


console.log(formatPhoneNumber(4422343111));
