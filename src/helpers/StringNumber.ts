class StringNumber {
  length: number;

  value: string;

  constructor(value, length) {
    let auxValue = value;
    this.length = length;
    if (auxValue.length < length) {
      while (auxValue.length < length) {
        auxValue = `0${auxValue}`;
      }
    }
    this.value = auxValue;
  }

  getNumberInReversedIndex(index) {
    const reversedIndex = this.length - index - 1;
    return this.value.charCodeAt(reversedIndex) - 48;
  }
}

export default StringNumber;
