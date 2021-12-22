var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("avoc");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

//word slide show
var counter = 0;

        function changeText()
        {
        var quotes = new Array();

        quotes[0] = "Green Africa Iniative is a project owned and being implemented by CCID ( Community Cooperation for Integrated Development ),which is a local NGO based in Rwanda with community operations in 14 districts of Rwanda. ";
        quotes[1] = "In Rwanda, together with our partners from 14 disstricts, we have planted more than 7 million fruit trees with intentions to plant more such that such fruits trees are distributed in all households to keep the environment green with incentives of having fruits,,";
        quotes[2] = " that can be nutritious to the citizens especially children, purposely to fight malnutrition and the growth of ecology diversity,among many other benefits of having a green environment /ecosystem";
       

        if (counter > 2)
            {
            counter = 0;
            }

        document.getElementById("textslide").innerHTML = quotes[counter];
        

        setTimeout(function(){changeText()},10000);
        counter ++;
        }