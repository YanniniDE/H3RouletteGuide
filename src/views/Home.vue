<template>
  <div class="all">
    <header class="header">
      <!--- <video src="../assets/animatedBackgrounds/Background1.jpg" autoplay loop playsinline muted></video> -->
      <div class="viewport-header">
        <h1 class="glow">
          Hitman Guide
        </h1>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => {
    return {}
  },
  methods: {
    newTab: function (link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../style/bootstrap-component-include';
  @-webkit-keyframes glow {
  from {
    text-shadow: 0 0 5px #ff0015, 0 0 7px #ff0000;
  }
  to {
    text-shadow: 0 0 7px #ff0015, 0 0 10px #ff0000;
  }
}

  :root {
    --headerOpacity: 1;
    --headerScale: 1;
  }

  @mixin coverer {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }

  .header {
    position: absolute;
    text-align: center;
    width: 100vw;
    height: 100vh;
    background: black;
    &, video, .viewport-header {
      @include coverer;
    }
    .viewport-header {
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 1;
      opacity: var(--headerOpacity);
      transform: scale(var(--headerScale));
    }
  }

  .glow {
    -webkit-animation: glow 2s ease-in-out infinite alternate;
    -moz-animation: glow 2s ease-in-out infinite alternate;
    animation: glow 2s ease-in-out infinite alternate;
  }

  html, body {
    height: 100vh;
    overflow-x: hidden;
  }
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 150%;
    line-height: 1.4;
  }
  body {
    background-color: black;
    margin: 0;
  }

  .all {
    background: rgb(0,0,0);
    color: rgb(0,0,0);
  }

  h1 {
    font-family: 'Syncopate', sans-serif;
    color: rgb(0, 0, 0);
    text-transform: uppercase;
    letter-spacing: 3vw;
    line-height: 1.2;
    font-size: 4vw;
    text-align: center;
    -ms-user-select: None;
    -moz-user-select: None;
    -webkit-user-select: None;
    user-select: None;
    span {
      display: block;
      font-size: 10vw;
      letter-spacing: -1.3vw;
    }
  }

  main {
    background: black;
    position: relative;
    padding: 1rem;
    margin-top: 100vh;
    &::before {
      content: "";
      @include coverer;
      top: -100vh;
    }
    p {
      max-width: 600px;
      margin: 1rem auto;
    }
  }
</style>
