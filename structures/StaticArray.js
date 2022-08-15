class StaticArray {
  constructor() {
    this.value = [];
  }

  insertAtBeginning(item) {
    const newArray = new Array(this.value.length + 1);
    newArray[0] = item;
    for (let i = 0; i < this.value.length; i++) {
      newArray[i + 1] = this.value[i];
    }
    this.value = newArray;
  }

  insertAtEnd(item) {
    const newArray = new Array(this.value.length + 1);
    let i = 0;
    while (i < this.value.length) {
      newArray[i] = this.value[i];
      i++;
    }
    newArray[i] = item;
    this.value = newArray;
  }

  insertAtPosition(item, position) {
    if (position > this.value.length || position < 0) {
      throw new Error('wrong input');
    } else {
      const newArray = new Array(this.value.length + 1);
      for (let i = 0; i < this.value.length + 1; i++) {
        if (i === position) {
          newArray[i] = item;
        } else if (i < position) {
          newArray[i] = this.value[i];
        } else {
          newArray[i] = this.value[i - 1];
        }
      }
      this.value = newArray;
    }
  }

  removeFirst() {
    const newArray = new Array(this.value.length - 1);
    for (let i = 1; i < this.value.length; i++) {
      newArray[i - 1] = this.value[i];
    }
    this.value = newArray;
  }

  removeLast() {
    const newArray = new Array(this.value.length - 1);
    for (let i = 0; i < this.value.length - 1; i++) {
      newArray[i] = this.value[i];
    }
    this.value = newArray;
  }
  removeAtPosition(position) {
    if (position < 0 || position >= this.value.length) {
      throw new Error('wrong input');
    } else {
      const newArray = new Array(this.value.length - 1);
      for (let i = 0; i < this.value.length; i++) {
        if (i < position) {
          newArray[i] = this.value[i];
        } else if (i > position) {
          newArray[i - 1] = this.value[i];
        }
      }
      this.value = newArray;
    }
  }
}

const arr = new StaticArray();
arr.insertAtBeginning(1);
arr.insertAtEnd(2);
arr.insertAtPosition(3, 2);
arr.removeFirst();
arr.removeLast();

console.log(arr);
