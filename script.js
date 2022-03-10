//* Accessing
let createContainer = document.querySelector(".container");

fetch("https://animechan.vercel.app/api/quotes/anime?title=naruto")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    // console.log(data);
    data.forEach((quote) => {
      //* Div for each quote
      //   console.log(quote);
      let box = document.createElement("div");
      box.setAttribute('class', 'box')
      createContainer.appendChild(box);

    // //   //*img
    //   let addImg = document.createElement("div");
    //   box.appendChild(addImg);
    //   let newImg = document.createElement("img")
    //   newImg.src= "naruto.jpg"
    //   addImg.appendChild(newImg)


      //* anime name
      let namesDiv = document.createElement("div");
      namesDiv.setAttribute("class", "an-names");
      box.appendChild(namesDiv);
      let span = document.createElement("span");
      span.setAttribute('class', 'para3')
        span.textContent = quote.anime;
      namesDiv.appendChild(span);

      //*anime characters and quotes
      let quotDiv = document.createElement("div");
      box.appendChild(quotDiv);

      let para1 = document.createElement("span");
      para1.setAttribute('class', 'para1')
      quotDiv.appendChild(para1);
      para1.textContent = quote.character;

      let para2 = document.createElement("span");
      para2.setAttribute('class', 'para2')
      quotDiv.appendChild(para2);
      para2.textContent = quote.quote;
    });
  });
