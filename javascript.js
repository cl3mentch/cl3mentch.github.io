const listItems = document.querySelectorAll(".navbaritem");

      // Loop through each li element and add an event listener
      listItems.forEach((item) => {
        item.addEventListener("click", () => {
          // Remove the "selected" class from all li elements
          listItems.forEach((i) => {
            i.classList.remove("selected");
          });

          // Add the "selected" class to the clicked li element
          item.classList.add("selected");
        });
      });

 

      const button = document.getElementById("dropdown");
      const subcondetails = document.querySelector(".subcondetails");
      const greyline = document.querySelector(".greyline")
      const greyline1 = document.querySelector(".greyline1")
      button.addEventListener("click", () => {
        if (subcondetails.style.display === "none") {
          subcondetails.style.display = "flex";
          greyline.style.display = "block";
         
        } else {
          subcondetails.style.display = "none"
          greyline.style.display = "none";

        }
    });
    