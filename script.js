const recognition = new (window.SpeechRecognition  || window.webkitSpeechRecognition ) ();

recognition.lang = "en-US"


const btn = document.querySelector("#btn")
 btn.addEventListener('click',()=>{
  
  function speak(text){
    const abc = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(abc)
  }
  function handleCommands(command){
    if (command.includes("open youtube")){
      speak("Opening Youtube...")
      window.open("https://www.youtube.com" , " _blank")

    }else if (command.includes("open facebook")){
      speak("Opening facebook...")
      window.open("https://www.facebook.com" , " _blank")

    }
    else if (command.includes("open instagram")){
      speak("Opening instagram...")
      window.open("https://www.instagram.com" , " _blank")
    }
    else if (command.includes("open google")){
      speak("Opening google...")
      window.open("https://www.google.com" , " _blank")
    }else if (command.includes("whatsapp")){
      speak("Opening whatsapp...")
      window.open("https://www.whatsapp.com" , " _blank")
    }
     
    else {
      speak("search on google...")
      window.open(`httpd://www.google.com/search?q=${command}`,"_blank")
    }

  }
  speak("Hello, how can i help you")

  setTimeout(() =>{
    recognition.start();
  },2000);



  recognition.onresult = (event) =>{
    const command = event.results[0][0].transcript.toLowerCase();
    
    handleCommands(command);

  };
  });


 
    

