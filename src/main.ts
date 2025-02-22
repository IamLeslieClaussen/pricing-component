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
      console.log("Switched to Monthly pricing");
    } else {
      console.log("switched to Annual Pricing");
    }
  });
});
