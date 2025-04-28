
const pronoun = [`the`, `our`, `your`, `his`, `her`, `my`, `your`, `the`];

const adj = [`great`, `big`, `grumpy`, `shiny`, `brave`, `dusty`, `crooked`, `tiny`, `ancient`, `cheerful`, `loud`, `sleepy`];

const noun = [`jogger`, `racoon`, `lantern`, `pineapple`, `backpack`, `jogger`, `raccoon`, `mirror`, `bicycle`, `helmet`, `pencil`, `suitcase`];

const ending = [`.com`, `.net`, `.org`, `.gov`, `.edu`, `.us`, `.co`, `.io`, `.biz`, `.info`];


const getDomain = () => {

const arr = [];

for (let p=0; p < pronoun.length ; p++){
  const pronounEnd = pronoun[p];
  for (let a=0; a < adj.length ; a++){
    const adjEnd = adj[a];
    for (let n=0; n < noun.length ; n++){
      const nounEnd = noun[n];
      for (let e=0; e < ending.length ; e++){
        const endingEnd = ending[e];

        const domainResult = pronounEnd + adjEnd + nounEnd + endingEnd;

        arr.push(domainResult);
    }
   }
  }
 }

 document.getElementById("domainResult").innerHTML = arr.join(`<br>`);
}