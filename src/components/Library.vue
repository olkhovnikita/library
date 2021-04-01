


<template>
  <div class="wrapper">
    <video class="video" playsinline id="vid">
      <source
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        type="video/mp4"
      />
    </video>
    <button type="button" class="playpause"></button>
    <div class="select">
      <button type="button" class="select__head">
        <span>выбрать тему</span>
        <img src="../assets/arrow.png" alt="" />
      </button>
      <ul class="select__list" style="display: none">
        <li
          class="select__item"
          v-for="category in categories"
          v-bind:key="category.id"
        >
          <button type="button" @click="showBooks(category.id)">
            {{ category.name }}
          </button>
        </li>
      </ul>
    </div>
    <Books
      :filtered="filtered"
      v-on:set-show-modal="showModal = $event"
      v-if="showModal"
    ></Books>
    <router-link class="back-link link" to="/"
      >назад в холл <img src="../assets/hall-img.png" class="hall-img"
    /></router-link>
    <audio :src="audioSrc"></audio>
  </div>
</template>
<script>
import Books from "./Books.vue";

export default {
  name: "Library",
  components: {
    Books,
  },
  data() {
    return {
      showModal: false,
      filtered: [],
      audioSrc: "",
      categories: [
        { id: "cardio", name: "Кардиология" },
        { id: "qwe", name: "qwe" },
      ],
      books: [
        {
          name: "book1",
          img: "imd.png",
          url: "url.ru",
          categories: ["cardio"],
        },
        {
          name: "book2",
          img: "imd.png",
          url: "url.ru",
          categories: ["qwe", "cardio"],
        },
        {
          name: "book3",
          img: "imd.png",
          url: "url.ru",
          categories: ["cardio", "qwe"],
        },
      ],
      audio: ["audio/1.mp3", "audio/2.mp3", "audio/3.mp3"],
    };
  },
  mounted() {
    this.play(),
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
    jQuery(($) => {
      $(".select").on("click", ".select__head", function () {
        if ($(this).hasClass("open")) {
          $(this).removeClass("open");
          $(this).next().fadeOut();
        } else {
          $(".select__head").removeClass("open");
          $(".select__list").fadeOut();
          $(this).addClass("open");
          $(this).next().fadeIn();
        }
      });

      $(".select").on("click", ".select__item", function () {
        $(".select__head").removeClass("open");
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
      });

      $(document).click(function (e) {
        if (!$(e.target).closest(".select").length) {
          $(".select__head").removeClass("open");
          $(".select__list").fadeOut();
        }
      });
    });
  },
  methods: {
    showBooks: function (id) {
      this.filtered = this.books.filter((el) => el.categories.includes(id));
      this.showModal = true;
    },
    play: function () {
      const randomNumber = Math.floor(Math.random() * this.audio.length);
      this.audioSrc = this.audio[randomNumber];
    },
  },
};
</script>

<style scoped>
.back-link {
  border: 3px solid #fbfdff;
  border-radius: 14px;
  padding: 5px 7px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  background-color: #867d6b;
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

.select {
  position: absolute;
  top: 10px;
  left: 10px;
  display: block;
  margin-bottom: 20px;
  border: 3px solid #fbfdff;
  border-radius: 14px;
  padding: 5px 7px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  background-color: #867d6b;
  letter-spacing: 1px;
}

.select__item button {
  width: 100%;
  display: block;
  padding: 10px 15px;
}

.select__head {
  width: 100%;
  font-family: Arial;
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0 10px;
  min-width: 400px;
}

.select__head img {
  width: 2vw;
  margin-left: 10px;
}

.select__list {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: 5px;
  max-height: 205px;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 100;
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #424348;
  scrollbar-color: dark;
  scrollbar-width: thin;
  overscroll-behavior: contain;
  font-size: 1vw;
  width: 100%;
}

.select__list::-webkit-scrollbar {
  width: 7px;
  background-color: #f8f9fa;
  padding: 5px;
}

.select__list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #d9d9d9;
}

.select__list .select__item {
  position: relative;
  border-top: 1px solid rgba(224, 229, 231, 0.5);
  cursor: pointer;
  list-style-type: none;
}

.select__list .select__item:hover button {
  background-color: rgba(224, 229, 231, 0.5);
}
</style>

