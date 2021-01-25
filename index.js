class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let newArray = [];
    let splitSentence = string.split(" ");
    let noNoWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    newArray.push(splitSentence[0].charAt(0).toUpperCase() + splitSentence[0].slice(1))
    for (const i of splitSentence.slice(1)){
      if (!noNoWords.includes(i)){
        newArray.push(i.charAt(0).toUpperCase() + i.slice(1));
      }
      else {
        newArray.push(i);
      }
    }
    return newArray.join(" ");
  }
}