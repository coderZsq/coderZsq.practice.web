class Human {
  hurtBy(damage) {
    console.log(`人受到了${damage}的攻击`);
  }
}

const human = new Human();
human.hurtBy('狗咬');
