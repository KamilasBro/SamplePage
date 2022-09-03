//refresh
$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});
// navbar buttons
{
const home=document.getElementById("homeButton");
const about=document.getElementById("aboutButton");
const skills=document.getElementById("skillsButton");
const contact=document.getElementById("contactButton");
const arts=document.getElementById("artsButton");
const sample=document.getElementById("sampleButton");
home.addEventListener("click",e=>{
    window.open("#div1", "_self");
});
about.addEventListener("click",e=>{
    window.open("#about", "_self");
});
skills.addEventListener("click",e=>{
    window.open("#skills", "_self");
});
contact.addEventListener("click",e=>{
    window.open("#contact", "_self");
});
arts.addEventListener("click",e=>{
    window.open("#arts", "_self");
});
sample.addEventListener("click",e=>{
    window.open("#sample", "_self");
});
}
// change color of navbar during scrolling
{
  window.onscroll = function (e)
{
  if (window.pageYOffset == 0) {
    document.getElementById("navbar").style.backgroundColor="transparent";
  }
  else
    document.getElementById("navbar").style.backgroundColor="rgb(10, 10, 10)";
}
}
//google charts drawing 
{
  var width, height;
  if(window.innerWidth<500){
    width=320;
    height=220;
  }
  else{
    width=500;
    height=400;
  }
// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['skill1', 4],
    ['skill2', 2],
    ['skill3', 1],
    ['skill4', 2],
    ['skill5', 1]
  ]);

  // Set chart options
  var options = {'title':'',
                 'width':width,
                 'height':height,
    'colors': ['rgb(7, 99, 247)', 'rgb(32, 113, 245)', 'rgb(49, 125, 247)', 'rgb(68, 139, 252)', 'rgb(86, 147, 245)'],
                    'backgroundColor': 'transparent'};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}


google.charts.load('current', {
    packages: ['corechart', 'bar']
  });
  google.charts.setOnLoadCallback(drawBasic);
  
  function drawBasic() {
  
    var data2 = google.visualization.arrayToDataTable([
      ['skills', 'range', ],
      ['skill1', 15],
      ['skill2', 25],
      ['skill3', 30],
      ['skill4', 60]
    ]);
  
    var options2 = {
      title: '',
      'width':width,
      'height':height,
      'backgroundColor': 'transparent',
      chartArea: {
        width: '50%'
      },
    };
  
    var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));
  
    chart.draw(data2, options2);
  }
}
//socials buttons
{
const twitch=document.getElementById("twitch");
const yt=document.getElementById("yt");
const fb=document.getElementById("fb");
const ig=document.getElementById("ig");
const tiktok=document.getElementById("tiktok");
const twitter=document.getElementById("twitter");
const pinterest=document.getElementById("pinterest");
const devart=document.getElementById("devart");

twitch.addEventListener("click",e=>{
    window.open("https://www.twitch.tv/", "_blank");
});
yt.addEventListener("click",e=>{
  window.open("https://www.youtube.com/", "_blank");
});
fb.addEventListener("click",e=>{
  window.open("https://www.facebook.com/", "_blank");
});
ig.addEventListener("click",e=>{
  window.open("https://www.instagram.com/", "_blank");
});
tiktok.addEventListener("click",e=>{
  window.open("https://www.tiktok.com/", "_blank");
});
twitter.addEventListener("click",e=>{
  window.open("https://twitter.com/home", "_blank");
});
pinterest.addEventListener("click",e=>{
  window.open("https://www.pinterest.ca/", "_blank");
});
devart.addEventListener("click",e=>{
  window.open("https://www.deviantart.com/", "_blank");
});
}
//resising charts :/
{
window.onresize = () => {
    resizing(this, this.innerWidth, this.innerHeight);
}
function resizing(target, w) {
    if(w<500){
      width=320;
      height=220;
    }else{
      width=500;
      height=400;
    }
    drawChart();
    drawBasic();
}
}