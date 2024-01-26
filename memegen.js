document.addEventListener("DOMContentLoaded", function() {
  let form = document.querySelector("form");
  let displayed = document.querySelector("#memes");

  form.addEventListener("submit", function(event){
    event.preventDefault();

    let url = document.querySelector("#url").value;
    let textOnTop = document.querySelector("#text_on_top").value;
    let textOnBot = document.querySelector("#text_on_bottom").value;

    let memeDiv = document.createElement('div');
    memeDiv.classList.add("memeDiv");
    let img = document.createElement("img");
    let top = document.createElement('div');
    let bot = document.createElement('div');
    let deleteButton = document.createElement("button");

    img.src = url;

    top.classList.add("top");
    top.innerHTML = textOnTop;

    bot.classList.add("bot");
    bot.innerHTML = textOnBot;

    deleteButton.addEventListener("click", function() {
      memeDiv.remove();
    });

    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Delete Meme!"

    memeDiv.append(img);
    memeDiv.append(top);
    memeDiv.append(bot);
    memeDiv.append(deleteButton);
    displayed.append(memeDiv);

    form.reset();
  });
});