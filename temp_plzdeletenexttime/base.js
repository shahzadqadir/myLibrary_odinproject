const cdiv = document.getElementById("cboxdiv");
const cbox = document.createElement("input");
cbox.type = "checkbox";
cbox.onclick = () => {
    console.log(cbox.checked);
}
cdiv.appendChild(cbox);
