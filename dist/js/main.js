function pageLoad() {

  let root = document.getElementById("root");

  let myObjects = [
    {
      tag: "h1",
    },
    {
      tag: "h2",
    }
  ];

  for(o of myObjects){
    root.insertAdjacentHTML("beforeend", `
      <${o.tag}>${o.content}</${o.tag}>
    `);
    }
  
  root.addEventListener("click", function() {
    root.classList.toggle("clicked");
  });
  
}


window.addEventListener("load", pageLoad);
