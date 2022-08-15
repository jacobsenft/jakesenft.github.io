
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("welcome");
  await delay(700);
  createText("connecting to server...");
  await delay(1500);
  createText("connection successful");
 
  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/gyokuryū";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "all"){
    trueValue(value);
    
    createCode("products", "our latest offerings.");
    createCode("services", "our service offerings.");
    createCode("contact", "in case of emergency only.");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "products"){
    trueValue(value);
    createText("<a href='https://github.com/heberleonard2' target='_blank'><i class='fab fa-github white'></i> enter guns and drugs here</a>")
  }
  else if(value === "services"){
    trueValue(value);
    createText("Oi, meu nome é Héber ;)")
    createText("we do not disclose our services <span class='blue'>here on our website</span>see us in person.")
  }
  else if(value === "contact"){
    trueValue(value);
    createText("<a href='' target='_blank'><i class='fab fa-github white'></i> jake williams</a>")
    createText("<a href='' target='_blank'><i class='fab fa-linkedin-in white'></i> eddie kim</a>")
    createText("<a href='' target='_blank'><i class='fab fa-instagram white'></i> horitsu saito</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();