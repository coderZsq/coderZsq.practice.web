var elementDefinations = Array.prototype.map.call(document.querySelectorAll(".element"), e => ({
  text: e.innerText,
  name: e.childNodes[0].childNodes[0].id.match(/the\-([\s\S]+)\-element:/) ? RegExp.$1 : null
}));

for (let defination of elementDefinations) {
  //console.log(defination.name + ":")
  let categories = defination.text.match(/Categories:\n([\s\S]+)\nContexts in which this element can be used:/)[1].split("\n");
  defination.contentModel = [];
  let contentModel = defination.text.match(/Content model:\n([\s\S]+)\nTag omission in text\/html:/)[1].split("\n");
  for (let line of contentModel)
    if (line.match(/([^ ]+) content./))
      defination.contentModel.push(RegExp.$1);
    else if (line.match(/Nothing.|Transparent./));
    else if (line.match(/^Text[\s\S]*.$/));
    else
      console.log(line)
}

var dictionary = Object.create(null);

for (let defination of elementDefinations) {
  dictionary[defination.name] = defination;
}

function check(parent, child) {
  for (let category of child.categories)
    if (parent.contentModel.categories.conatains(category))
      return true;
  if (parent.contentModel.names.conatains(child.name))
    return true;
  return false;
}