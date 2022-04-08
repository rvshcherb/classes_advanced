import Character from '../Character';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test.each([
  [Bowman, 'Vasya'],
  [Daemon, 'Vasya'],
  [Magician, 'Vasya'],
  [Swordsman, 'Vasya'],
  [Undead, 'Vasya'],
  [Zombie, 'Vasya'],
])('Name test for: %o with name: %s', (Type, name) => {
  const unit = new Type(name);
  expect(unit.name).toBe(name);
});

test.each([
  [Bowman, 'V'],
  [Daemon, '0'],
  [Magician, ''],
  [Swordsman, 'dfgsdfgsfdgss'],
  [Undead, ''],
  [Zombie, ''],
])('Incorrect name test for: %o with name: %s', (Type, name) => {
  const unit = new Type(name);
  expect(() => {
    unit.name();
  }).toThrow('Недопустимая длина имени');
});

test.each([
  ['Character', 'Bowman'],
  ['Character', 'Daemon'],
  ['Character', 'Magician'],
  ['Character', 'Swordsman'],
  ['Character', 'Undead'],
  ['Character', 'Zombie'],
])('Type test for: %o with type %s', (name, type) => {
  const unit = new Character(name, type);
  expect(unit.type).toBe(type);
});

test('Incorrect type test for character', () => {
  const unit = new Character('testName', 'Soldier');
  expect(() => {
    unit.type();
  }).toThrow('Недопустимый тип персонажа');
});

test('levelUp test', () => {
  const unit = new Bowman('vasya');
  unit.levelUp();
  expect(unit.level).toBe(2);
  expect(unit.health).toBe(100);
  expect(unit.attack).toBe(30);
  expect(unit.defence).toBe(30);
});

test('levelUp error test', () => {
  const unit = new Bowman('vasya');
  unit.health = 0;
  expect(() => unit.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test.each([
  [100, 77.5],
  [-2, -2],
])('test damage', (health, expected) => {
  const unit = new Zombie('vasya');
  unit.health = health;
  unit.damage(25);
  expect(unit.health).toBe(expected);
});
