
const container=document.getElementsByClassName("container")[0];
const refreshBtn=document.getElementsByClassName("refresh-btn")[0];

const color=()=>{
    container.innerHTML="";
    for(let i=0; i<100; i++){
        const hexColor=generatePalette();
        changeColor(hexColor);
    }
}
const generatePalette=()=>{
    const hexaValue= Math.floor(Math.random() * 0xffffff).toString(16);
    const hexColor=`#${hexaValue.padStart(6,"0")}`;
    return hexColor;
}

const changeColor=(hexColor)=>{
    const colorContainer=document.createElement("div");
    colorContainer.classList.add("color-container");

    const color=document.createElement("div");
    color.classList.add("color");
    color.style.backgroundColor=`${hexColor}`;

    const hexValue=document.createElement("div");
    hexValue.classList.add("hex-value");
    hexValue.append(`${hexColor}`);

    colorContainer.append(color, hexValue);
    colorContainer.addEventListener("click", ()=>{
        navigator.clipboard.writeText(`${hexColor}`).then(()=>{
            hexValue.innerHTML="COPIED";
            setTimeout(() => {
                hexValue.innerHTML=`${hexColor}`;
            }, 1000);
        })
        .catch(()=> alert("Failed to copy!"));
        
    });

    container.append(colorContainer);
}
color();

refreshBtn.addEventListener("click",color);


