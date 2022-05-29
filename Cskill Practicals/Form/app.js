console.log("connected");

const inputField = document.querySelectorAll(".input");

Array.from(inputField).forEach((ele) => {
  ele.addEventListener("focus", () => {
    ele.style.border = "1px solid  #2c3e50";
  });

  if (ele.value != "") {
    ele.addEventListener("blur", () => {
      ele.style.border = "1px solid  #58D68D ";
    });
  }
});
