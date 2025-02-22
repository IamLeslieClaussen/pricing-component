document.addEventListener("DOMContentLoaded", () => {
  const check = document.getElementById("check") as HTMLInputElement;
  const yearly = document.querySelectorAll(
    ".yearly"
  ) as NodeListOf<HTMLDivElement>;
  const monthly = document.querySelectorAll(
    ".monthly"
  ) as NodeListOf<HTMLDivElement>;

  if (!check) {
    console.error("checkbpx element not found");
  }

  check.addEventListener("change", () => {
    if (check.checked) {
      console.log("switched to Annual Pricing");
      yearly.forEach((price) => price.classList.remove("flex"));
      yearly.forEach((price) => price.classList.add("hidden"));
      monthly.forEach((price) => price.classList.remove("hidden"));
      monthly.forEach((price) => price.classList.add("flex"));
    } else {
      console.log("Switched to Monthly pricing");
      yearly.forEach((price) => price.classList.remove("hidden"));
      yearly.forEach((price) => price.classList.add("flex"));
      monthly.forEach((price) => price.classList.remove("flex"));
      monthly.forEach((price) => price.classList.add("hidden"));
    }
  });
});
