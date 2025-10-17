document.getElementById("hero").style.color="yellow";
function hello()
{
    alert("button clicked");


}
//document.getElementById("welcome-btn"),oneclick=hello();
document.getElementById("welcome-btn").addEventAudioListener("click",()=>{alert("Button clicked Yaay!!");})
