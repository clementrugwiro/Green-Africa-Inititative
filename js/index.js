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
       
        var head =new Array();
        head[0]="Community Development"
        head[1]="Establishing fruit trees nursery beds"
        head[2]="Distribution of fruit trees"

        var activity =new Array();
        activity[0]="Green Afica Initiative under CCID, we develop green communities in all parts of the country, aiming at educating about the green growth of the environment and how such communities can strive togethe making the entire Africa Green"
        activity[1]="In Rwanda, we have established over 14 fruits trees nursery beds. in our districts of eperations, where we source a diversity of fruit trees seeds certfied by Rwanda Agriculture Board, we incubate them while preparing them to be distributed in different parts of the country."
        activity[2]="After incubating fruits trees seeds for a period of few months, they are ready to be distributed across the country in all districts, with a main goal for them to be planted either in households; communities like schools, churches and public offices."
        if (counter > 2)
            {
            counter = 0;
            }

        document.getElementById("textslide").innerHTML = quotes[counter];
        document.getElementById("tit").innerHTML = head[counter];
        document.getElementById("acts").innerHTML = activity[counter];
        

        setTimeout(function(){changeText()},10000);
        counter ++;
        }



function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}