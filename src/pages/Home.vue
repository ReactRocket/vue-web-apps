<template>
  <div class="main-container">
    <header>Vue Web Apps</header>
    <div class="body-container">
      <aside>
        <template v-for="(bar, index) in sidebars" :key="index">
          <div class="inner-aside-box">
            <div class="left">{{ bar.title }}</div>
            <div class="right">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </div>
          </div>
        </template>
      </aside>
      <main>
        <template v-for="(game, index) in games" :key="index">
          <Card :data="game" @goToGame="goToGame" />
        </template>
      </main>
    </div>
    <footer>Developed BY : <a href="https://www.linkedin.com/in/dev-ayush-varma/" target="_blank"
        rel="noopener noreferrer"> AYUSH VARMA </a> (<a href="https://github.com/ReactRocket"
        target="_blank">ReactRocket</a>)</footer>
  </div>
</template>

<style scoped>

  footer{
    height:10%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: 5px;
  }
  .inner-aside-box .left{
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: center;
  }
  .inner-aside-box .right{
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: center;
  }
  .inner-aside-box:hover{
    background-color: rgb(211, 209, 209);
    color: aliceblue;
    box-shadow: 0 0 5px  ;
  }
  .inner-aside-box{
    font-size: 20px;
    font-weight: bold;
    color: gray;
    padding: 0 15px;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    background-color: rgb(230, 229, 229);
    height: 40px;
    border-radius: 10px;
    border: 1px solid gary;
    cursor: pointer;
    transition: all 1s ease-in-out;
  }
  aside{
    padding: 10px;
    height:100%;
    width: 25%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    border: 1px solid gray;
    border-radius: 5px;
  }
  main{
    height: 100%;
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }
  .body-container{
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  header{
    height: 10%;
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    border: 1px solid gray;
    border-radius: 5px;
  }

  .main-container{
    padding: 10px;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

</style>
  
<script>
import  Card from '../components/common/Card.vue'
export default {
  components: {
    Card
  },
  data() {
    return {
      sidebars:[
        {
          title:'Apps',
          options:[
            {
              title:'Todo-App',
              to:{name:'TodoApp'}
            }
          ]
        }
      ],
      activeBar:null,
      games: [
        { title: 'Reaction Timer', content:"This is a simple game to measure your reaction time.", link: {name:'ReactionTimer'} },
        { title: 'Todo', content:"This is a simple game to measure your reaction time.", link: {name:'TodoApp'} },
      ]
    };
  },
  methods: {
    goToGame(route) {
      this.$router.push(route);
    }
  }
};
</script>
  

  