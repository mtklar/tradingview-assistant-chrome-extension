const myPart = {};

myPart.quanta = () => {
  var data = [];
  const titles = [
    "Realised Profit",
    "Unrealised Profit",
    "Total Profit",
    "Unit Cost",
    "ROI",
    "Capital Required",
    "Max Buys",
    "Remaining Cost",
    "Remaining Amount",
  ];
  var datafields = document.querySelectorAll(
    "div[class^='valueItem-'][class*='valueValue-']",
  );
  for (const el of datafields) {
    let txt = el.innerHTML;
    var match = txt.match('title="(.*?)"');
    if (match && titles.includes(match[1])) {
      var dataEl = { name: match[1], value: el.innerText };
      console.log(dataEl);
      data.push(dataEl);
    }
  }
  return data;
};

var report = {};
var titles = [
  "Realised Profit",
  "Unrealised Profit",
  "Total Profit",
  "Unit Cost",
  "ROI",
  "Capital Required",
  "Max Buys",
  "Remaining Cost",
  "Remaining Amount",
];
var datafields = document.querySelectorAll(
  "div[class^='valueItem-'][class*='valueValue-']",
);
for (const el of datafields) {
  let txt = el.innerHTML;
  var match = txt.match('title="(.*?)"');
  if (match && titles.includes(match[1])) {
    var numberStr = el.innerText;
    if (numberStr[0] == "−") {
      report[match[1]] =
        parseFloat(numberStr.replace(/−/g, "").replace(/,/g, "")) * -1;
    } else {
      report[match[1]] = parseFloat(numberStr.replace(/,/g, ""));
    }
  }
}
