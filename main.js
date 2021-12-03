const sentence = {
    //array of all possible parts of the sentence
    firstPart: [],
    secondPart: [],
    thirdPart: [],
    getRandomSentence() {
        let newSentence = '';

        //randomly picks parts from the arrays
        let firstRandomPart = this.firstPart[Math.floor(Math.random() * this.firstPart.length)];
        let secondRandomPart = this.secondPart[Math.floor(Math.random() * this.secondPart.length)];;
        let thirdRandomPart = this.thirdPart[Math.floor(Math.random() * this.thirdPart.length)];;

        newSentence = `That ${firstRandomPart}'s ${secondRandomPart} is ${thirdRandomPart}`;

        return newSentence;
    }
};

sentence.firstPart = ['cat', 'dog', 'horse', 'lizard'];
sentence.secondPart = ['claw', 'hoof', 'tail', 'ear'];
sentence.thirdPart = ['dirty', 'clean', 'cute', 'ugly'];

console.log(sentence.getRandomSentence());