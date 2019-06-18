class SortedList {
  constructor() {
    this.item = [];
    this.length = this.item.length;
  }

  add(item) {
    this.item.push(item);
    this.length = this.item.length;
  }

  get(item) {
    this.item.sort((a, b) => a - b);
    return this.item[item - 1];
  }

  max() {
    if (this.item.length == 0) throw new Error("EmptySortedList");
    else {
      this.item.sort((a, b) => b - a);
      return this.item[0];
    }
  }

  min() {
    if (this.item.length == 0) throw new Error("EmptySortedList");
    else {
      this.item.sort((a, b) => a - b);
      return this.item[0];
    }
  }

  average() {
    if (this.item.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.item.reduce((a, b) => a + b, 0) / this.item.length;
    }
  }

  sum() {
    if (this.item.length == 0) return 0;
    else {
      return this.item.reduce((a, b) => a + b, 0);
    }
  }
}

module.exports = SortedList;
