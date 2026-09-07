const penguin_sad = document.querySelector("#penguin_sad");
const penguin_happy = document.querySelector("#penguin_happy");
const button = document.querySelector("#Pet");
const message = document.querySelector("#message");

const messages = [
  "Thank you for pet me, you are the kindest person I have ever met.",
  "Thank you for pet me, soon everything will get better",
  "Thank you for pet me, someday someone will love you as much as I love you.",
  "Thank you for pet me, you are great person.",
  "Thank you for pet me, I recommend you have a hot chocolate.",
  "Thank you for pet me. I love you",
  "Thank you for pet me. Have a good day",
];

button.addEventListener("click", () => {
  penguin.classList.add("Pet");
  setTimeout(() => penguin.classList.remove("Pet"), 2000);
  
  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];

  penguin_sad.style.display="none";
  penguin_happy.style.display="block";

  setTimeout(()=>{
    penguin_happy.style.display="none";
    penguin_sad.style.display="block";
  },2000);
});
