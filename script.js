const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know, sobrang miss na miss na kita.\n\nAlam ko naman na triny naman talaga natin magwork, napagod ka and naubos ka. Gustong gusto kong sabihin sayo na, No matter what happened between us, i will always cherish our moments together, its a core memory for me seeing you smile, laugh, and tarayan together.\n\nI will always support you, maikki. Kahit na hindi na tayo naguusap, im always rooting for your success and happiness in life.\n\nMy door is open for you always. Ikaw parin talaga haha. Take care of yourself, I love you!`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

