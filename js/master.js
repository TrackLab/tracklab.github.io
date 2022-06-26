var first = true;

function get_current() {
  for(var tg of document.getElementsByClassName("tab")) {
    if(!(tg.style.display == "none")) {
      return tg;
    }
  }
}

function show(id) {
  var cont = get_current();

  for(let tg of document.getElementsByClassName("tab")) {
    if(tg.id == id) {
      try {
        if(tg.id == cont.id) {
            return;
        }

        cont.style.display = "";
        cont.style.opacity = "1";
        cont.style.marginLeft = "0px";

        if(!(cont == null)) {
          $("#"+cont.id).animate({
            'margin-left': '-300px',
            'opacity': '0'
          }, 200, function() {
            cont.style.display = "none";
          });
        }
      } catch (e) {
        console.log(e);
      }

      first = false;

      repair(tg);

      tg.style.display = "";
      tg.style.marginLeft = "-300px";
      tg.style.opacity = "0.2";

      $("#"+tg.id).animate({
        'margin-left': '0px',
        'opacity': "1"
      });
    } else {
      tg.style.display = "none";
    }
  }
}

function repair(tg) {
  let header2 = document.querySelector('#header2');
  if(!(header2.style.display == "none")) {
      let height = header2.offsetWidth;
      tg.style.padding = "10px 20px";
      for(let cur of document.getElementsByClassName("brhelper")) {
        cur.innerHTML = "<br><br><br>";
      }
  }
}

function header_animation() {
  for(let head of document.getElementsByTagName("header")) {
      head.style.opacity = "0.2";
  }

  $("header").animate({
      'opacity': "1"
  });
}

function toggle_bar() {
  var bar = document.getElementById("sidebar");
  if(bar.style.display == "none") {
    bar.style.display = "block";
    bar.style.marginLeft = "-300px";
    $("#sidebar").animate({
        'margin-left': '0px'
    });
  } else {
    $("#sidebar").animate({
        'margin-left': '-300px'
    });
    bar.style.display = "none";
  }
}
