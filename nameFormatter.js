class NameFormatter {

  invertName(name) {
    let nameArray = [];

    if (name === undefined) {
      throw 'Error';
    } else if (name.substring(0, 1).match(/\s/)) {
      nameArray = name.substring(1, name.length).split(' ');

      if (nameArray.length === 4) {
        return nameArray[0] + " " + nameArray[2] + ", " + nameArray[1];
      } else if (nameArray.length === 2 && nameArray[1] !== '') {
        return nameArray[1] + ", " + nameArray[0];
      } else {
        return name.trim();
      }
    } else if (name.match(/[A-Z]{1}[a-z]{1,2}\./)) {
      nameArray = name.substring(0, name.length).split(' ');

      if(nameArray.length === 2) {
        return name;
      } else if (nameArray.length === 3) {
        return nameArray[0] + " " + nameArray[2] + ", " + nameArray[1];
      } else {
        return "";
      }
    } else {
      nameArray = name.split(' ');

      if (nameArray.length === 2) {
        return nameArray[1] + ", " + nameArray[0];
      } else {
        return name.trim();
      }
    }
  }
}

//let nameFormatter = new NameFormatter();
//nameFormatter.invertName(undefined);
module.exports = NameFormatter;