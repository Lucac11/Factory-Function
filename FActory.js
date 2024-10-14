// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  //console.log(returnRandBase());
  //console.log(mockUpStrand());
  
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum: specimenNum,
      dna: dna,
      mutate() {
        const dnaBases = ['A', 'T', 'C', 'G'];
        const randomIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = this.dna[randomIndex];
        while (newBase === this.dna[randomIndex]) {
          newBase = dnaBases[Math.floor(Math.random() * dnaBases.length)];
        }
        this.dna[randomIndex] = newBase;
        return this.dna;
      },
    compareDNA(otherPaequor) {
      let identical = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherPaequor.dna[i]) {
          identical++;
        }
      }
    const percentage = ((identical / this.dna.length) * 100);
    console.log(`specimen #${this.specimenNum} and specimen #${otherPaequor.specimenNum} have ${percentage}% in common`);
    },
    willLikelySurvive() {
        let survivalBases = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === 'C' || this.dna[i] === 'G') {
            survivalBases++;
          }
        }
  
        const survivalPercentage = (survivalBases / this.dna.length) * 100;
        return survivalPercentage >= 60;
      },
      complementStrand() {
        const complement = {
          'A': 'T',
          'T': 'A',
          'C': 'G',
          'G': 'C'
        };
        return this.dna.map(base => complement[base]);
      }
    };
  }  
  
  // Create 30 instances of pAequor that can survive
  const survivingPAequor = [];
  let specimenNum = 1;
  
  while (survivingPAequor.length < 30) {
    const newOrganism = pAequorFactory(specimenNum, mockUpStrand());
    if (newOrganism.willLikelySurvive()) {
      survivingPAequor.push(newOrganism);
      specimenNum++;
    }
  }
  
  /* console.log(survivingPAequor); */
  const first = pAequorFactory(1, ['A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C']);
  /* const second = pAequorFactory(2, ['A', 'T', 'G', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C']);
  first.compareDNA(second);
  console.log(first.dna);
  console.log(first.mutate())
  console.log(first.willLikelySurvive()); */
  console.log(first.complementStrand());

  /* This is just a test to see if I understood 
  how to publish my codes on github form visual studio code*/