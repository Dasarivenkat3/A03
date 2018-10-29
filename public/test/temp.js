function temperatureConverter(tempinput,inverse) {
   
       // var tempinput= document.getElementById("inputFahrenheit").value;
        //alert(tempinput);
      //var inverse=document.getElementById("inverseSelect").checked;
      valNum = parseFloat(tempinput);
      if(inverse==true)
          //alert("sai");
    {
        $("#OutputLabel").html('Celsius:');
        $("#Inputlabel").html('Fahrenheit'); 
     // document.getElementById("outputCelcius").innerHTML='<p>'+((valNum-32)/1.8)+'</p>';
       var result=(valNum-32)/1.8;
    }
    else
    {
        var result=valNum*1.8+32;
        $("#Inputlabel").html('Celsius:');
        $("#OutputLabel").html('Fahrenheit'); 
        $("#outputCelcius").html(result);

    // console.log(valNum);
   }
	return result;
    }