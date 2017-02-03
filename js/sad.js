console.log("random linkai");
// ?(document).ready(function() {

var videos = [
'n6KJ-c6NWXk',
'eDXkz1g8Cw0',
'LCJblaUkkfc',
'ikHJwNpi0AY'
];

var index=Math.floor(Math.random() * videos.length);
var url = ""
var html='<div id="video"><h3>Random Video</h3><iframe width="720" height="480" src="http://www.youtube.com/embed/' + videos[index] + '" frameborder="0" allowfullscreen></iframe></div>';
console.log(html);
document.write(html);

// });//-->
