// createing the vue object : new Vue ({})
new Vue({
  el: app,
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    output: [],
    spcBtnOn: false,
    helthBtnOn: false,
    gameStarted: false,
    scrolled : false,
    timer: 0,
  },
  methods: {
    reduceMoHealth: function () {
      let reduce = Math.floor(Math.random() * 6);
      this.monsterHealth = this.monsterHealth - reduce;
      atckOut = `<h6 class='text-dark'> Your Attack : ${reduce}</h6>`;
      this.output.push(atckOut);
    },
    reduceMoHealthSpe: function () {
      const spcAttc = 10;
      this.monsterHealth = this.monsterHealth - spcAttc;
      atckOut = `<h6 class='text-warning'> Your Special Attack : ${spcAttc}</h6>`;
      this.output.push(atckOut);
      this.spcBtnOn = false;
      const vm = this;
      setInterval(function () {
        vm.spcBtnOn = true;
      }, 6000);
    },
    takeHealth: function () {
      const health = 5;
      this.playerHealth = this.playerHealth + health;
      atckOut = `<h6 class='text-success'> Your Health Increase : ${health}  </h6>`;
      this.output.push(atckOut);
      this.helthBtnOn = false;
      const vm = this;
      setInterval(function () {
        vm.helthBtnOn = true;
      }, 4000);
    },
    endGame: function () {
      this.monsterHealth = 100;
      this.playerHealth = 100;
      this.gameStarted = false;
      this.output = [];
      clearInterval(this.timer);
    },
    gameStart : function () {
      const vm = this;
      vm.gameStarted = true;
      vm.spcBtnOn = true;
      vm.helthBtnOn = true;
      vm.timer = setInterval(function () {
        let reduce = Math.floor(Math.random() * 10);
        vm.playerHealth = vm.playerHealth - reduce;
        atckOut = `<h6 class='text-danger'> Monster Attack : ${reduce}  </h6>`;
        vm.output.push(atckOut);
        if (vm.playerHealth <= 0 || vm.monsterHealth <= 0) {
          clearInterval(vm.timer);
        }
      }, 1000);
    },
  },
});
