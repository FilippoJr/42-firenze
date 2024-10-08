let outline = document.querySelector('.outline');
let cursor = document.querySelector('.cursor');
let a = document.querySelectorAll('a');


document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  outline.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50%) )`;
  cursor.style.transform = `translate( calc(${x}px - 50%) , calc(${y}px - 50%) )`;
});


a.forEach((item) => {
  item.addEventListener('mouseover', () => {
    outline.classList.add('hover');
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    outline.classList.remove('hover');
    cursor.classList.remove('hover');

  });
});