<template>
  <div>
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="0"
      controls
      fade
      indicators
      background="#666666"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide
        v-for="slide in slides"
        :key="slide.id"
        :caption="slide.caption"
        :img-src="slide.img"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<style>
.carousel-caption {
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.carousel-caption h3 {
  max-width: 70%;
  padding: 1rem;
  color: #fff;
  font-size: 3rem;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 4rem;
  height: 4rem;
}
.carousel-item img {
  width: 100%;
  height: 75vh;
  object-fit: cover;
  filter: blur(5px);
}
.carousel-indicators li {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 0 0.6rem;
  opacity: 0.9;
}
.carousel-indicators .active {
  background-color: var(--deep-purple);
}
</style>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      // DADOS ESTATICOS
      // ALTERAR PARA DINAMICOS COM BACKEND
      slides: [
        {
          id: 1,
          caption: "Slide 1",
          img: "https://picsum.photos/1024/480/?image=52"
        },
        {
          id: 2,
          caption: "Slide 2",
          img: "https://picsum.photos/1024/480/?image=53"
        },
        {
          id: 3,
          caption: "Slide 3",
          img: "https://picsum.photos/1024/480/?image=54"
        },
        {
          id: 4,
          caption: "Slide 4",
          img: "https://picsum.photos/1024/480/?image=55"
        }
      ]
    };
  }
};
</script>