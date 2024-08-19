import * as fs from 'fs';

class Person {
  constructor() {
    this.id = null;
    this.name = null;
    this.age = null;
    this.gender = null;
    this.family = null;
    this.children = [];
    this.parents = [];
  }

  addChild(child) {
    this.children.push(child);
  }

  addParent(parent) {
    this.parents.push(parent);
  }

  setInfo(id, name, age, gender) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
