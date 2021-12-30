Webcam.set({
    height:350,
    width:350,
    image_format:'png',
    png_quality:90
}
);

camera = document.getElementById("webcam");
Webcam.attach('#webcam');

function TakeImage(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="A" src="'+data_uri+'"/>';
    });

}
console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/s1j5p5xz4/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!')
}

function Check(){
    img = document.getElementById("A");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("ObjectNames").innerHTML = results[0].label;
        document.getElementById("ObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}