console.log("Hello you")

let checkone=false;

function clickone(){
  if(!checkone){
    document.querySelector('#onepass').style.padding = "24px";
    document.getElementById("onepass").innerHTML = `<p class="input-text">
    Netflix is a streaming service that offers a wide variety of
    award-winning TV shows, movies, anime, documentaries and more – on
    thousands of internet-connected devices.
  </p>
  <br>
  <p class="input-text">
    You can watch as much as you want, whenever you want, without a single
    ad – all for one low monthly price. There's always something new to
    discover, and new TV shows and movies are added every week!
  </p>`;
    document.querySelector('.first').style.rotate = "45deg";
    checkone = true;
  }else{
    document.querySelector('#onepass').style.padding = "0px";
    document.getElementById("onepass").innerHTML =``;
    document.querySelector('.first').style.rotate = "0deg";
    checkone = false;
  }
};


let checktwo=false;

function clicktwo(){
  if(!checktwo){
    document.querySelector('#twopass').style.padding = "24px";
    document.getElementById("twopass").innerHTML = `<p class="input-text">
    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
    </p>`;
    document.querySelector('.second').style.rotate = "45deg";
  checktwo = true;
  }else{
    document.querySelector('#twopass').style.padding = "0px";
    document.getElementById("twopass").innerHTML =``;
    document.querySelector('.second').style.rotate = "0deg";
    checktwo = false;
  }
};


let checkthree=false;

function clickthree(){
  if(!checkthree){
    document.querySelector('#threepass').style.padding = "24px";
    document.getElementById("threepass").innerHTML = ` <p class="input-text">
    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
  </p>
  <br>
  <p class="input-text">
    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
  </p>`;
  document.querySelector('.third').style.rotate = "45deg";
  checkthree = true;
  }else{
    document.querySelector('#threepass').style.padding = "0px";
    document.getElementById("threepass").innerHTML =``;
    document.querySelector('.third').style.rotate = "0deg";
    checkthree = false;
  }
};


let checkfour=false;

function clickfour(){
  if(!checkfour){
    document.querySelector('#fourpass').style.padding = "24px";
    document.getElementById("fourpass").innerHTML = ` <p class="input-text">
    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
    </p>`;
    document.querySelector('.forth').style.rotate = "45deg";
  checkfour = true;
  }else{
    document.querySelector('#fourpass').style.padding = "0px";
    document.getElementById("fourpass").innerHTML =``;
    document.querySelector('.forth').style.rotate = "0deg";
    checkfour = false;
  }
};


let checkfive=false;

function clickfive(){
  if(!checkfive){
    document.querySelector('#fivepass').style.padding = "24px";
    document.getElementById("fivepass").innerHTML = `<p class="input-text">
    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
  </p>`;
  document.querySelector('.fivth').style.rotate = "45deg";
  checkfive = true;
  }else{
    document.querySelector('#fivepass').style.padding = "0px";
    document.getElementById("fivepass").innerHTML =``;
    document.querySelector('.fivth').style.rotate = "0deg";
    checkfive = false;
  }
};


let checksix=false;

function clicksix(){
  if(!checksix){
    document.querySelector('#sixpass').style.padding = "24px";
    document.getElementById("sixpass").innerHTML = `<p class="input-text">
    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
  </p>
  <br>
  <p class="input-text">
    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
  </p>`;
  document.querySelector('.sixth').style.rotate = "45deg";
  checksix = true;
  }else{
    document.querySelector('#sixpass').style.padding = "0px";
    document.getElementById("sixpass").innerHTML =``;
    document.querySelector('.sixth').style.rotate = "0deg";
    checksix = false;
  }
};


