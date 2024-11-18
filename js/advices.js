let id = 0;
async function showApi() {
  try {
    const advise = await fetch("https://api.adviceslip.com/advice");
    const res = await advise.json();
    if (!advise.ok) {
      throw new Error("sorry advice not found!");
    }

    const advice = document.querySelector("h2");
    console.log(res);
    advice.textContent = res.slip.advice;
    document.querySelector("span").querySelector("p").textContent =
      "#" + res.slip.id;
  } catch (err) {
    console.error(err);
    return res.id;
  }
}

const dice = document.querySelector(".dice");
dice.addEventListener("click", function () {
  id = showApi();
});
