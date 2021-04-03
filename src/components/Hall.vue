<template>
  <div class="wrapper">
    <video
      :src="videoSrc"
      type="video/mp4"
      class="video"
      playsinline
      id="vid"
    ></video>
    <div id="empty" @click="play"></div>
    <button type="button" class="playpause"></button>
    <router-link to="/cinema" class="cinema-link link"
      >Кинозал <img src="../assets/cin-img.png" class="cin-img" />
    </router-link>
    <router-link to="/library" class="library-link link"
      >Библиотека <img src="../assets/lib-img.png" class="lib-img"
    /></router-link>
    <button type="button" class="skip" @click="skip">Пропустить</button>
  </div>
</template>
<script>
export default {
  name: "Hall",
  methods: {},
  data: function () {
    return {
      videoSrc: "/videos/hall.mp4",
      videos: [
        "/videos/jokes-in-hall/joke1.mp4",
        "/videos/jokes-in-hall/joke2.mp4",
        "/videos/jokes-in-hall/joke3.mp4",
        "/videos/jokes-in-hall/joke4.mp4",
        "/videos/jokes-in-hall/joke5.mp4",
      ],
    };
  },
  methods: {
    skip: function () {
      this.videoSrc = "/videos/hall-demo.mp4";
      document.querySelector(".skip").style = "display:none";
      document.getElementById("empty").style = "display:block";
    },
    play: function (event) {
      event.preventDefault();
      const randomNumber = Math.floor(Math.random() * this.videos.length);
      this.videoSrc = this.videos[randomNumber];
    },
  },
  mounted() {
    $(".video")
      .parent()
      .click(function () {
        if ($(this).children(".video").get(0).paused) {
          $(this).children(".video").get(0).play();
          $(this).children(".playpause").fadeOut();

          document.querySelector(".cinema-link").style.display = "block";
          document.querySelector(".library-link").style.display = "block";
        }
      });
    var nextVideo = "/videos/hall-demo.mp4";
    var videoPlayer = document.getElementById("vid");

    videoPlayer.onended = function () {
      if (nextVideo == "/videos/hall-demo") {
        videoPlayer.setAttribute("autoplay", "");
        videoPlayer.setAttribute("loop", "");
        videoPlayer.src = nextVideo;
      } else {
        videoPlayer.setAttribute("autoplay", "");
        videoPlayer.src = nextVideo;
      }
      document.getElementById("empty").style = "display:block";
    };
  },
};
</script>
<style scoped>
#empty {
  display: none;
  position: absolute;
  top: 20px;
  bottom: 20px;
  width: 20%;
  user-select: none;
}
.skip {
  display: none;
  position: absolute;
  bottom: 5%;
  left: 5%;
  border: 4px solid #fbfdff;
  border-radius: 14px;
  padding: 5px 7px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  background-color: rgba(134, 125, 107, 0.5);
  letter-spacing: 1px;
}
.video {
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
.wrapper {
  display: flex;
  justify-content: center;
  vertical-align: middle;
  width: auto;
  position: relative;
  width: 100%;
}
.playpause {
  background-image: url(../assets/play.png);
  background-repeat: no-repeat;
  width: 50%;
  height: 50%;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  margin: auto;
  background-size: contain;
  background-position: center;
  background-color: transparent;
}
.library-link,
.cinema-link {
  border: 4px solid #fbfdff;
  border-radius: 14px;
  padding: 5px 7px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  background-color: rgba(134, 125, 107, 0.5);
  letter-spacing: 1px;
  animation-name: fadein;
  animation-fill-mode: both;
  animation-timing-function: ease-in;
  animation-duration: 2s;
  position: absolute;
  top: 50%;
  transform: translateY(-325%);
  display: none;
}
.library-link {
  right: 13%;
}

.cinema-link {
  left: 13%;
}

.link {
  font-size: 2vw;
  padding: 0 10px;
  text-transform: uppercase;
  font-family: Arial;
  font-weight: 900;
  color: #ffffff;
}

.cin-img,
.lib-img {
  max-width: 100%;
  width: 4vw;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>