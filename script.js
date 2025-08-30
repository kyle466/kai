const message = `I guess this is it, my final message to you. My last words, carrying everything I still feel, but can no longer say directly to you. This is the goodbye I never wanted to write. A goodbye full of love that never left, and pain I never truly learned to let go of.
I still love you. That hasn’t changed, not even a little. Every part of me still hopes hopes that one day, maybe, we’ll find our way back to what we had. That maybe, somehow, you’d look back and remember everything we were, everything we dreamed of, everything we planned. But I know now... that hope has to end. Because you’re already happy and that happiness no longer includes me.
Yann, Babb, Langging, Babyy, lissud kaayu dawaton pero need, need tika buhian na babi, sag dili pako ganahan mo buhi. Yk what bab, nag hope japun ko. Naa japuy part nako nga nahan nga mobalik ka. Nahan i try ug fix balik, nga unta pwede pa. Pero mas gipili man nimo na ma happy na wala ko sakit siya, pero I need to accept the fact nga dina ako rason ngano happy ka rn. Eh love nlng tika from afar babii. Dinako magpakita pa, dinako magparamdam, pero know babi nga ikaw japun naa sa ako heart.
You might forget me soon the way I made you laugh, the sound of my voice every night, how I used to say “I love you langging” before you fell asleep. Pero ako? I remember everything. I remember how we met through a simple game (🏸)that unexpectedly brought us closer. I never thought that game would lead me to someone I’d consider my home. Someone who made me feel like I mattered. Someone who made me believe I was enough.
But now, I have to let you go. Not because I stopped loving you, but because I love you enough to not get in the way of your peace. And I can see you’re doing better now. You’re lighter, calmer, happier... without me. Amping ka permi, babi. Takecare of your self babuii. I may not be there anymore, but I hope a small part of me stays with you maybe in a memory, or in a dream you barely remember. Thank you. For loving me even for a short time. For making me feel seen, heard, and held. Thank you for making me smile, for all the late-night calls, the sweet little messages, the laughter, the plans, even the arguments because all of it meant something to me. Thank you for giving me a piece of your heart bab, even if it was just temporary.
And I’m sorry for everything. Sa akong mga pagkulang babu, sa tanan nakong nabuhat nga nasakitan ka. I never meant to hurt you. I only ever wanted to make you happy. Unta bisag dinako part sa imo life, mapasaylo japun ko nimo.
You’ll always be a big part of me. You’ll always be the one I quietly wish well from a distance. I’ll still think about you wonder if you’re doing okay, wonder if you ever think of me, even just once.
Iloveloveloveloveyousomuchh, BABIIII. And I don’t think that will ever change.
This is the hardest goodbye I’ve ever had to say. But I have to set you free.
Goodbye, mylove, my baby, my babii, my home. I hope maka heal nako the way you did, ma happy nako as happy as you are rn. Iloveloveyousomuchhh yangell to the moon and back. Always in all ways. 
`;

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
