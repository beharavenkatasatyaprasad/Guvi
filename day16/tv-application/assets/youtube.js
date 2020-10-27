function getId(urlo) {
    let url = urlo;
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
    height: '100%',
    width: '100%',
    videoId: getId(document.getElementById("ytplayer").src),
    playerVars: {
        controls: 0,
        autoplay:1,
        showinfo:1
    },
    });
}

function getUrl(){
    return document.getElementById("ytplayer").src
}

document.getElementById("button_bw").addEventListener("click", function(){
        player.loadVideoById(getId(document.getElementById("p_value").value))
    })
document.getElementById("button_fw").addEventListener("click", function(){
        player.loadVideoById(getId(document.getElementById("n_value").value))
    })
