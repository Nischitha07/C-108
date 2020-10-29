Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
   });
   camera = document.getElementById("camera");
   Webcam.attach(camera);

   function capture_img()
   {
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>';
       
       });
   }
   function predict_img()
   {
    snapshot = document.getElementById("captured_img");
    Classifier.classify(snapshot , output);

   }
   console.log("ml5 version:" , ml5.version );
   Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZqTL5hExS/model.json" , modelLoaded);
  function modelLoaded()
  {
      console.log("modelLoaded");
  } 
function output(error , results)
{
    if(error)
    {
        console.error(error);
    }
    else 
    {
        console.log("success");
        document.getElementById("result_emotion_name").innerHTML = results [0].label  ;
        document.getElementById("result_emotion_name2").innerHTML = results [1].label  ;
        console.log(results);
        if (results [0].label == "Happy")
        {
            document.getElementById("emoji_update").innerHTML = "&#128516;";
        }
        if (results [1].label == "Happy")
        {
            document.getElementById("emoji_update2").innerHTML = "&#128516;";

        }
        if (results [0].label == "Sad")
        {
            document.getElementById("emoji_update").innerHTML = "&#128546;";

        }
        if (results [1].label == "Sad")
        {
            document.getElementById("emoji_update2").innerHTML = "&#128546;";


        }
        if (results [0].label == "Angry")
        {
            document.getElementById("emoji_update").innerHTML = "&#128545;";

        }
        if (results [1].label == "Angry")
        {
            document.getElementById("emoji_update2").innerHTML = "&#128545;";
        }
        if (results [0].label == "Normal")
        {
            document.getElementById("emoji_update").innerHTML = "&#128528;";

        }
        if (results [1].label == "Normal")
        {
            document.getElementById("emoji_update2").innerHTML = "&#128528;";
        }
    }
} 