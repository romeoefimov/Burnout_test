function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6SbkKD8ievJ":
        Script1();
        break;
      case "5giPA8sZZHk":
        Script2();
        break;
  }
}

function Script1()
{
  var num1=0
var num2 = 0
var num3=0
var num4 = 0
var num5=0
var num6 = 0
var num7=0
var num8 = 0
var num9=0
var num10 = 0
var num11=0
var num12 = 0
var num13=0
var num14 = 0
var num15=0
var sum = 0

var player = GetPlayer();

num1 = player.GetVar("q1");
num2 = player.GetVar("q2");
num3 = player.GetVar("q3");
num4 = player.GetVar("q4");
num5 = player.GetVar("q5");
num6 = player.GetVar("q6");
num7 = player.GetVar("q7");
num8 = player.GetVar("q8");
num9 = player.GetVar("q9");
num10 = player.GetVar("q10");
num11 = player.GetVar("q11");
num12 = player.GetVar("q12");
num13 = player.GetVar("q13");
num14 = player.GetVar("q14");
num15 = player.GetVar("q15");


sum = num1+num2+num3+num4+num5+num6+num7+num8+num9+num10+num11+num12+num13+num14+num15

player.SetVar("total",sum)
}

function Script2()
{
  var num1=0
var num2 = 0
var sum = 0

var player = GetPlayer();

num1 = player.GetVar("n1");
num2 = player.GetVar("n2");

sum = num1+num2

player.SetVar("total",sum)
}

