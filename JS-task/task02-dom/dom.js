function changeOuterLinks() {
  document.querySelectorAll("nav#link-list a").forEach((e) => {
    if (e.innerHTML.includes("outer-link")) {
      e.setAttribute("target", "_blank");
      e.innerHTML = `<strong>${e.innerHTML}</strong>`;
    }
  });
  const navocska = document.querySelector("nav");
  navocska.style.display = "flex";
  navocska.style.flexDirection = "column";
  navocska.style.margin = "0px auto";
  navocska.style.width = "30%";
  navocska.style.border = "1px solid blue";
  navocska.style.padding = "16px";
}

changeOuterLinks();

export { changeOuterLinks };
