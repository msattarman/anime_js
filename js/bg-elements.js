const elements = document.querySelectorAll('.set-bg');

for (let i = 0; i < elements.length; i++) {

   const src = elements[i].dataset.setbg;
   elements[i].style.backgroundImage = `url(${src})`;
}


/* const elements = document.querySelectorAll('.set-bg');
elements.forEach(e => {
    const src = e.dataset.setbg;
    e.style.backgroundImage = `url('${src}')`;
});
 */
