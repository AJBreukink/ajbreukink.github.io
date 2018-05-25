$(document).ready(function() {
    var max_fields      = 10;
    var wrapper         = $(".container1");
    var add_button      = $(".add_form_field");

    var x = 1;
    $(add_button).click(function(e){
        e.preventDefault();
        if(x < max_fields){
            x++;
            $(wrapper).append('<div><input type="text" id="" name="mytext[]"/><button class="delete">Verwijder</button></div>'); //add input box
        }
  else
  {
  alert('You Reached the limits')
  }
    });

    $(wrapper).on("click",".delete", function(e){
        e.preventDefault(); $(this).parent('div').remove(); x--;
    })
});

function submit() {
  var firstname = document.getElementById('firstname');
  var lastname = document.getElementById('lastname');
  var city = document.getElementById('city');
  var workexp = document.getElementById('workexp');
  // var workexp_time = document.getElementById('workexp_time');
  // var workexp_timeunit = document.getElementById('workexp_timeunit').value;
  var education = document.getElementById('education');
  var characteristics = document.getElementById('characteristics');
  var lookingfor = document.getElementById('lookingfor');

  var text =  "Mijn naam is "+firstname.value+" "+lastname.value+". Ik woon in "+city.value
              +". Op dit moment ben ik op zoek naar een aanstelling als "+lookingfor.value
              +". Ik ben werkzaam geweest als "+workexp.value
              +". Mijn opleiding is "+education.value+". Ik ben "+characteristics.value
              +". ";

  document.getElementById('demo').innerText = text;
}
