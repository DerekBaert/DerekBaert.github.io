const images = document.querySelectorAll(".image.fit");
let imgSrc;
// get images src onclick
images.forEach((img) => 
{
    console.log(img)
    img.addEventListener("click", (e) => 
    {
        imgSrc = e.target.src;
        //run modal function
        imgModal(imgSrc);
    });
});

//creating the modal
let imgModal = (src) => 
{
    const modal = document.createElement("div");
    const innermodal = document.createElement("div");
    modal.setAttribute("class", "modal");
    innermodal.setAttribute("class", "innermodal");
    //add the modal to the main section or the parent element
    document.querySelector(".four").append(modal);
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    //creating the close button

    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    //close function
    closeBtn.onclick = () => 
    {
        modal.remove();
    };
    innermodal.append(newImage, closeBtn);
    modal.append(innermodal);
};

$(document).keydown(function(event) { 
    if (event.keyCode == 27) 
    { 
        document.querySelector(".modal").remove();
    }
  });

