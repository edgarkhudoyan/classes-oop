class Shiritori {
  constructor() {
    this.words = [];
    this.isGameOver = false;
  }

  play(word) {
    if (this.words.length === 0) {
      this.words.push(word);
      return this.words;
    }

    if (word[0] === this.words[this.words.length - 1].slice(-1)) {
      this.words.push(word);
      return this.words;
    } else {
      this.isGameOver = true;
      return `Game Over!`;
    }
  }

  restart() {
    this.words = [];
    this.isGameOver = false;
    return `The game has been restarted!`;
  }
}

let myShiritori = new Shiritori();

console.log(myShiritori.words);
console.log(myShiritori.play('apple'));
console.log(myShiritori.play('ear'));
console.log(myShiritori.play('red'));
