<template lang="">
    <div class="main-container">
        <h1>Reaction Time</h1>
        <h2>In this game a circle appearce on random time. You have to clik on the circle to capture your fastest reaction time.</h2>
        <div class="game-container">
            <div class="circle-container">
                <div v-if="showCircle" @click="stopWatch('stop')" class="circle">
                    {{reactionTime ? reactionTime + 'ms' : 'Click Me!'}}
                </div>
            </div>
            <div class="result">
                <h3 v-if="reactionTime">Your reaction time is : {{reactionTime}}ms</h3>
            </div>
            <div class="buttons-container">
                <button @click="resetGame" v-if="showCircle">Reset</button>
                <button @click="startGame" v-else>Start</button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  data() {
    return {
      reactionTime: 0,
      showCircle: false,
      timer: 0,
      intervalId: null,
      timeoutId: null
    };
  },
  computed: {
    totalTime() {
      return this.timer;
    }
  },
  methods: {
    resetGame() {
      this.reactionTime = 0;
      this.showCircle = false;
      this.timer = 0;
      clearInterval(this.intervalId);
      clearTimeout(this.timeoutId);
    },
    stopWatch() {
      this.reactionTime = this.timer;
      clearInterval(this.intervalId);
    },
    startGame() {
      this.resetGame();
      const timeout = 2000 * Math.random();
      this.timeoutId = setTimeout(() => {
        this.showCircle = true;
          this.intervalId = setInterval(() => {
          this.timer++;
        }, 10);
      }, timeout);
    }
  }
}
</script>
<style scoped>
    .result{
        height: 10%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }
    .circle{
        height: 200px;
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        cursor: pointer;
        user-select: none;
    }
    .buttons-container button{
        padding: 10px 40px;
        background-color: aquamarine;
        cursor: pointer;
    }
    .buttons-container{
        height: 20%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .circle-container{
        height: 70%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .main-container{
        height: 100vh;
        width: 60%;
        margin: 0 auto;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 50px;
        gap: 20px;
    }
    .game-container{
        height: 50vh;
        width: 80%;
        margin: auto;
        border: 1px solid gray;  
        border-radius: 5px;  
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>