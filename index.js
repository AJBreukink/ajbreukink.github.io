function submit() {
  var firstname = document.getElementById('firstname');
  var lastname = document.getElementById('lastname');
  var city = document.getElementById('city');
  var workexp = document.getElementById('workexp');
  var workexp_time = document.getElementById('workexp_time');
  var workexp_timeunit = document.getElementById('workexp_timeunit').value;
  var education = document.getElementById('education');
  var characteristics = document.getElementById('characteristics');
  var lookingfor = document.getElementById('lookingfor');

  var text =  "Mijn naam is "+firstname.value+" "+lastname.value+". Ik woon in "+city.value
              +". Op dit moment ben ik op zoek naar een aanstelling als "+lookingfor.value
              +". Ik ben "+workexp_time.value+" "+workexp_timeunit+" werkzaam geweest als "+workexp.value
              +". Mijn opleiding is "+education.value+". Ik ben "+characteristics.value
              +". ";

  document.getElementById('demo').innerText = text;
}
