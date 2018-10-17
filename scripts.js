var questNum = 0;
var rightAns = 0;

but.onclick = function()
{
  var btn_text = document.getElementById("but").innerHTML;
  if(btn_text == "Играть")
    {
        document.getElementById("answer").style.visibility = 'visible';
        btn_text = "Дальше »";
    }

  if(btn_text == "Проверить »")
    {
    var ans = document.getElementById("answer").innerHTML.toLowerCase();
    if(ans.trim() == '')
      {
      document.getElementById("answer").focus();
      return;
      }
    document.getElementById("answer").contentEditable = false;
    document.getElementById("but").innerHTML = "Дальше »";

    var compare;
   
    if(questNum == 1)
      {
      document.getElementById("quest").innerHTML = "это же мухомор!";
      compare = ["нет", "нелья"];
      }
    else if(questNum == 2)
      {
      document.getElementById("quest").innerHTML = "это поганки поганые, к ним не прикасайся!";
      compare = ["нет", "нельзя", "тоже"];
      }
    else if(questNum == 3)
      {
      document.getElementById("quest").innerHTML = "белые грибы — вкусны и нежны";
      compare = ["да", "конечно", "съедобны", "ага"];
      }
    else if(questNum == 4)
      {
      document.getElementById("quest").innerHTML = "это лисички, они отличные";
      compare = ["нет", "не умрёшь"];
      }
    else if(questNum == 5)
      {
      document.getElementById("quest").innerHTML = "опята — наши ребята";
      compare = ["да"];
      }
    else if(questNum == 6)
      {
      document.getElementById("quest").innerHTML = "это дождевик. странный на вид, но вообще-то годен в пищу.";
      compare = ["да", "приготовила бы"];
      }
    else if(questNum == 7)
      {
      document.getElementById("quest").innerHTML = "фу. это желчный гриб. не ешь.";
      compare = ["нет", "не съел",  "не съел бы"];
      }
    else if(questNum == 8)
      {
      document.getElementById("quest").innerHTML = "я даже не знаю, как это называется, но лучше не ешь.";
      compare = ["да", "не знаю", "нет"];
      }


    var b = false;
    for(var i in compare)
    {
      if(ans == compare[i]) b = true;
    }

    if(b)
    {
      document.getElementById("title").innerHTML = "Правильно!";
      document.getElementById("answer").classList.add("ansRight");
      document.getElementById("but").classList.add("btnRight");
      rightAns++;
    }
    else
    {
      document.getElementById("title").innerHTML = "Неправильно...";
      document.getElementById("answer").classList.add("ansWrong");
      document.getElementById("but").classList.add("btnWrong");
    }

  }
  else if(btn_text == "Дальше »")
  {
 
    questNum++;
    document.getElementById("title").innerHTML = "Вопрос #"+questNum;
    document.getElementById("answer").contentEditable = true;
    document.getElementById("answer").innerHTML = "";
    document.getElementById("answer").classList.remove("ansRight");
    document.getElementById("answer").classList.remove("ansWrong");
    document.getElementById("but").innerHTML = "Проверить »";
    document.getElementById("but").classList.remove("btnRight");
    document.getElementById("but").classList.remove("btnWrong");
    document.getElementById("answer").focus();

    if(questNum == 1)
    {
      document.getElementById("quest").innerHTML = "Начнём с простого. Это можно есть?"
      document.getElementById("pic").src = "img/mushroom_1.jpg";
    }
    else if(questNum == 2)
    {
      document.getElementById("quest").innerHTML = "А этот?";
      document.getElementById("pic").src = "img/mushroom_2.jpg";
    }
    else if(questNum == 3)
      {
        document.getElementById("quest").innerHTML = "Эти ребята симпатичные. Но съедобны?";
        document.getElementById("pic").src = "img/mushroom_3.jpg";
      }
      else if(questNum == 4)
        {
          document.getElementById("quest").innerHTML = "Умрешь, если съешь?";
          document.getElementById("pic").src = "img/mushroom_4.jpg";
        }
        else if(questNum == 5)
          {
            document.getElementById("quest").innerHTML = "Есть или не есть, вот вопрос";
            document.getElementById("pic").src = "img/mushroom_5.jpg";
          }
          else if(questNum == 6)
            {
              document.getElementById("quest").innerHTML = "Этот гриб приготовила бы твоя мама?";
              document.getElementById("pic").src = "img/mushroom_6.jpg";
            }
            else if(questNum == 7)
              {
                document.getElementById("quest").innerHTML = "Пожалуйста, я забочусь о тебе. Скажи начистоту, ты бы съел этот гриб?";
                document.getElementById("pic").src = "img/mushroom_7.jpg";
              }
              else if(questNum == 8)
                {
                  document.getElementById("quest").innerHTML = "Напоследок самый странный персонаж. Едим?";
                  document.getElementById("pic").src = "img/mushroom_8.jpg";
                }
                
    else
    {
      document.getElementById("title").innerHTML = "Результат тебя как грибника";
      document.getElementById("quest").innerHTML = "Правильно угадал: " + 100*(rightAns/8) + "%";
      document.getElementById("answer").style.visibility = 'hidden';
      document.getElementById("but").innerHTML = "Попробовать еще раз не отравиться";
    }
  }
  else if(btn_text == "Попробовать еще раз")
  {

    location.reload();
  }
}
