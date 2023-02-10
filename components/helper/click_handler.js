export default function handleClickScroll() {
  const element = document.getElementById("sub-container");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    console.log("clicked");
  }
}
