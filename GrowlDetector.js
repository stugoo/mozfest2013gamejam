
(function () {
    var GrowlDetector;

    navigator.getMedia = (
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia
       );

    GrowlDetector = function () {
        var source;

        navigator.getMedia({
            video: false,
            audio: true
        }, function (stream) {

            source = window.webkitURL.createObjectURL(stream);
            console.log(stream);
            window.a = stream;




        }, function (err) {
            throw err;
        });
    };

    window.GrowlDetector = GrowlDetector;

}());
