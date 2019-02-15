
function triangletrack()  {
  var side1 =parseInt(document.getElementById('side1').value);
  var side2 =parseInt(document.getElementById('side2').value);
  var side3 =parseInt(document.getElementById('side3').value);
  var values=[side1,side2,side3];
  if(values[0] + values[1] <= values[2] || values[0] + values[2] <= values[1] || values[1] + values[2] <= values[0]){
      alert("sorry triangle cannot be formed");
    }
  else if(values[0]===values[1] && values[1]===values[2] && values[0]===values[2]) {
    alert("This is an equilateral triangle");
  }
  else if(values[0]===values[1]||values[0]===values[2]||values[1]===values[2])  {
    alert("This is an isosceles Triangle");
  }
  else if(values[0]+values[1]>values[2]||values[1]+values[2]>values[0]||values[0]+values[2]>values[1])  {
    alert("This is a Scalene triangle");
  }
    else {
      alert("hatukuelewi ndugu");
    }
}
