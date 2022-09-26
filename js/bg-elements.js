const bgElements = () => {
   const elements = document.querySelectorAll(".set-bg");
   
   elements.forEach((elem) => {
      elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
   })
}
bgElements()





/* const array = [
  {
    id: 0,
    value: 100,
  },
  {
    id: 2,
    value: 300,
  },
  {
    id: 1,
    value: 200,
  },
];

// метод перебора filter всегда возвращает новый массив, поэтому результат выполнения данного метода мы записали в новую переменную
const newArray = array.sort((a, b) => a.value - b.value);
console.log(newArray); */
