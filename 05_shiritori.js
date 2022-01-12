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

    if (
      word.charAt(0) ===
      this.words[this.words.length - 1].charAt(this.words.length)
    ) {
      this.words.push(word);
      return this.words;
    } else {
      this.isGameOver = true;
      return `Game Over!`;
    }
  }
}

let myShiritori = new Shiritori();

console.log(myShiritori.words);
console.log(myShiritori.play('apple'));
