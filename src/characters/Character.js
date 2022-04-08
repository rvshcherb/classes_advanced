export default class Character {
  constructor(name, type) {
    this._name = name;
    this._type = type;
    this.health = 100;
    this.level = 1;
  }

  get type() {
    switch (true) {
      case (Character.types.includes(this._type)):
        return this._type;
      default:
        throw new Error('Недопустимый тип персонажа');
    }
  }

  get name() {
    switch (true) {
      case (this._name.length < 2 || this._name.length > 10):
        throw new Error('Недопустимая длина имени');
      default:
        return this._name;
    }
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

Character.types = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];
