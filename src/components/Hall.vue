<template>
  <div class="wrapper">
    <video class="video" playsinline id="vid">
      <source
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        type="video/mp4"
      />
    </video>
    <div class="playpause"></div>
    <div id="links">
      <div class="cinema-link">
        <img src="../assets/cin-img.png" class="cin-img" />
        <router-link to="/cinema" class="link">Кинозал </router-link>
      </div>
      <div class="library-link">
        <router-link to="/library" class="link">Библиотека </router-link>
        <img src="../assets/lib-img.png" class="lib-img" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Hall",
  mounted() {
    $(".video")
      .parent()
      .click(function () {
        if ($(this).children(".video").get(0).paused) {
          $(this).children(".video").get(0).play();
          $(this).children(".playpause").fadeOut();
          document.querySelector("#links").style.display = "flex";
        }
      });
    var nextVideo =
      "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4";
    var videoPlayer = document.getElementById("vid");
    videoPlayer.onended = function () {
      videoPlayer.src = nextVideo;
    };
  },
};
</script>
<style scoped>
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
  background-image: url(http://png-4.findicons.com/files/icons/2315/default_icon/256/media_play_pause_resume.png);
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
}

#links {
  display: none;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  position: absolute;
  top: 50%;
  z-index: 1;
  width: 60vw;
  height: 50vh;
}

.library-link,
.cinema-link {
  border: 4px solid #fbfdff;
  border-radius: 14px;
  padding: 5px 7px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  background-color: #867d6b;
  letter-spacing: 1px;
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
</style>