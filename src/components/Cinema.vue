<template>
  <div class="wrapper">
    <video
      class="video"
      playsinline
      id="vid"
      :src="videoSrc"
      type="video/mp4"
    ></video>
    <div id="empty" @click="play"></div>
    <button type="button" class="playpause"></button>
    <div class="categories">
      <div class="select" @click="changeStyle">
        <button
          type="button"
          class="select-btn"
          @click="showDropDown = !showDropDown"
        >
          выбрать тему
          <img src="../assets/arrow.png" alt="arrow" />
        </button>
        <div
          class="select-items"
          :style="showDropDown ? 'display:block' : 'display:none'"
        >
          <div v-for="category in categories" v-bind:key="category.id">
            <button
              type="button"
              class="option"
              @click="showBooks(category.id)"
            >
              {{ category.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <Films
      :filtered="filtered"
      v-on:set-show-modal="showModal = $event"
      v-if="showModal"
    ></Films>
    <router-link class="back-link link" to="/"
      >назад в холл <img src="../assets/hall-img.png" class="hall-img"
    /></router-link>
    <button type="button" class="skip" @click="skip">Пропустить</button>
  </div>
</template>
<script>
import Films from "./Films.vue";
export default {
  name: "Cinema",
  components: Films,
  data() {
    return {
      showDropDown: false,
      videoSrc: "/videos/cinema.mp4",
      showModal: false,
      filtered: [],
      categories: [
        { id: "cardio", name: "Кардиология" },
        { id: "qwe", name: "qwe" },
      ],
      films: [
        {
          name: "book1",
          video: "imd.png",
          url: "url.ru",
          categories: ["cardio"],
        },
        {
          name: "book2",
          video: "imd.png",
          url: "url.ru",
          categories: ["qwe", "cardio"],
        },
        {
          name: "book3",
          video: "imd.png",
          url: "url.ru",
          categories: ["cardio", "qwe"],
        },
      ],
      videos: [
        "/videos/jokes-in-cinema/joke1.mp4",
        "/videos/jokes-in-cinema/joke2.mp4",
        "/videos/jokes-in-cinema/joke3.mp4",
      ],
    };
  },
  methods: {
    showBooks: function (id) {
      this.filtered = this.films.filter((el) => el.categories.includes(id));
      this.showModal = true;
    },
    play: function (event) {
      event.preventDefault();
      const randomNumber = Math.floor(Math.random() * this.videos.length);
      this.videoSrc = this.videos[randomNumber];
    },
    skip: function () {
      this.videoSrc = "/videos/cinema-demo.mp4";
      document.querySelector(".skip").style = "display:none";
      document.getElementById("empty").style = "display:block";
    },
    changeStyle: function () {
      if (this.showDropDown) {
        document.querySelector(".select-btn").classList.add("restyle");
      } else {
        document.querySelector(".select-btn").classList.remove("restyle");
      }
    },
  },
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
    var nextVideo = "/videos/cinema-demo.mp4";
    var videoPlayer = document.getElementById("vid");
    videoPlayer.onended = function () {
      if (nextVideo == "/videos/library-demo") {
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
  width: 24%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  left: 40%;
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
.back-link {
  border: 3px solid #fbfdff;
  border-radius: 14px;
  padding: 5px 7px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  background-color: rgba(134, 125, 107, 0.5);
  letter-spacing: 1px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 1;
}
.hall-img {
  max-width: 100%;
  width: 4vw;
}

.link {
  font-size: 2vw;
  padding: 0 10px;
  text-transform: uppercase;
  font-family: Arial;
  font-weight: 900;
  color: #ffffff;
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
  max-width: 50px;
  max-height: 50px;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  margin: auto;
  background-size: contain;
  background-position: center;
}

.select {
  position: relative;
}

.categories {
  position: absolute;
  top: 20px;
  left: 20px;
  user-select: none;
}

.select-btn,
.select-items {
  background-color: rgba(134, 125, 107, 0.5);
  font-family: Arial;
  font-size: 2vw;
  font-weight: 900;
  text-transform: uppercase;
  color: #ffffff;
  min-width: 439px;
  border: 4px solid #fbfdff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
}
.select-items {
  overflow-y: auto;
  border-top: none;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  max-height: 431px;
}
.restyle {
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>