class Sorter {
  constructor() {
    // your implementation
      this.array = [];
      this.leng = 0;
      this.compareFunction = function(a,b){
        return a-b;
      }
  }

  add(element) {
    // your implementation
    this.array.push(element);
    this.leng = this.leng + 1;
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.leng;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    this.indices = indices;
    this.buff = [];
    let i;
    this.indices.sort();
    for(i = 0; i < indices.length; i++)
    {
      this.buff[i] = this.array[this.indices[i]]
    }
    this.buff.sort(this.compareFunction);
    for(i = 0; i < this.buff.length; i++)
    {
      this.array[this.indices[i]] = this.buff[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;