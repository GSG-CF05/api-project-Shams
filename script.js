let createContainer = document.querySelector(".container");
fetch("https://animechan.vercel.app/api/quotes")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    data.forEach((quote) => {
        let box = document.createElement('div')
        createContainer.appendChild(box);
    });
  });
