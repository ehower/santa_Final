var counter_list = [200]
  var str_counter_0 = counter_list[0];
  var display_str = "";
  var display_div = document.getElementById("display_div_id");
  var string = " Presents";

  function incrementCount(current_count){
    setInterval(function(){
      
      while (display_div.hasChildNodes()) {
          display_div.removeChild(display_div.lastChild);
      }
      str_counter_0++;
      display_str = str_counter_0.toString() + string;
      for (var i = 0; i < display_str.length; i++) {
        var new_span = document.createElement('span');
        new_span.className = 'num_tiles';
        new_span.innerText = display_str[i];
        display_div.appendChild(new_span);
      }
    },.1);
  }
	
