function SwapBackground(a_id, li_id) {
  let a = document.getElementById(a_id);
  let li = document.getElementById(li_id);
  a.style.color = "black";
  a.style.background = "white";
  a.style.borderBottom = "2px solid black";
  a.style.padding = "5px 10px";
  a.style.borderRadius = "15px";
  li.style.padding =
    li_id == "1" && a_id == "1.1"
      ? "0px 40px 0px 90px"
      : (li.style.padding = "0px 40px 0px 30px");
}

function HiddenBlock(event, el_id) {
  let el = document.getElementById(el_id);
  if (event == "onmouseover") {
    el.style.transition = "all 1.5s ease-out";
    el.style.opacity = "1";
  } else {
    el.style.opacity = "0";
  }
}

function ShowForm(el_id) {
  let el = document.getElementById(el_id);
  el.style.display = "block";
}


