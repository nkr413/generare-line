let canva = document.getElementById('canvas');
ctx = canva.getContext("2d");
  
width   = canva.width   = window.innerWidth;
height  = canva.height  = window.innerHeight;

// DATABASE
let ln_Y_top = 0;
let ln_pos_left = 2;

let lnTwo_W_left = 0;
let lnTwo_pos_top = 2;

//STARTCODE

start();
function start() {
  let one_stop_num = Math.ceil(Math.random() * height);
  let ln_stop_num = Math.round(one_stop_num / 10) * 10;

  let two_stop_num = Math.ceil(Math.random() * width);
  let lnTwo_stop_num = Math.round(two_stop_num / 10) * 10;

  let int = setInterval(() => {
    ln_Y_top += 20;
    draw_line();

    lnTwo_W_left += 20;
    draw_two_line();

    if (lnTwo_W_left >= lnTwo_stop_num) {
      clearInterval(int);

      lnTwo_pos_top += 20;
      lnTwo_W_left = 0;
      start();
    }

    if (ln_Y_top >= ln_stop_num) {
      clearInterval(int);

      ln_pos_left += 20;
      ln_Y_top = 0;
      start();
      if (lnTwo_pos_top >= height) clearInterval(int);
      if (ln_pos_left >= width) window.location.reload();
    }
  }, 20);
}

function draw_line() {
  ctx.beginPath();
  ctx.moveTo(ln_pos_left, 0);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.lineTo(ln_pos_left, ln_Y_top);
  ctx.stroke();
}

function draw_two_line() {
  ctx.beginPath();
  ctx.moveTo(0, lnTwo_pos_top);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 5;
  ctx.lineTo(lnTwo_W_left, lnTwo_pos_top);
  ctx.stroke();
}
