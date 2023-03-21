// This JavaScript Function simply shows the tab contents and tab link (underlining the tab) when you click on the tab.
// Otherwise, nothing shows. (Default Skills Tab) This javascript function simply adds active-link class and 
// active-tab class to the tab that is clicked, so that the content just for that tab shows up.
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// JavaScript for defining open menu and close menu functions. (Only for Mobile Users)
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0px";
    }
function closemenu(){
    sidemenu.style.right="-200px";
    }
// JavaScript for Adding Form Data from User to Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbxV0ubfhgcjQAS4WgrLIg_3VJ-URecy_PwbH3vKQjdnYiisL7jSR64dhX4WJWzaVTvm/exec'
    //              The name here \|/ \|/ \|/ \|/ \|/ \|/must match name attribute of form in index.html
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })