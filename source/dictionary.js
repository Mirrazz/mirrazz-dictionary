/*
Copyright (C) Mirrazz 2022
See `LICENSE` for more details
*/

// prevent unwanted interals from being in window object
window.MirrazzDictionary=(function () {
  // all of the words are here
  var dictionary={
    "alligator": [
      {
        definition: "a semi-aquatic reptile native to America and China.",
        wordSplit: ['al','li','ga','tor'],
        type: "noun",
        pronounce: 'aləɡādər',
        examples: [
          "Did you see the alligator in the lake?"
        ]
      }
    ]
  }
  var WordObject=function Word() {
    this.word="";
    this.definition="";
    this.type="noun";
  }
  WordObject.prototype.isNoun=function(){
    return this.type==="noun"
  }
  WordObject.prototype.isVerb=function(){
    return this.type==="verb"
  }
  WordObject.prototype.isAdjective=function(){
    return this.type==="adj"
  }
  WordObject.prototype.emphasisSplit=function(){return []}
  WordObject.prototype.getPronounciation=function(){return ""}
  WordObject.prototype.getExamples=function(){return []}
  return {
    getWord:function getWord(wordt) {
      if(!dictionary[wordt]) { return null }
      var words=[]
      for(var i=0;i<dictionary[wordt].length;i++){
        var word=new WordObject()
        word.word=wordt;
        word.definition=dictionary[wordt][i].definition
        word.getExamples=function(){return dictionary[wordt][i].examples}
        word.getPronounciation=function(){return dictionary[wordt][i].pronounce}
        word.emphasisSplit=function(){return dictionary[wordt][i].wordSplit}
        word.type=dictionary[wordt][i].type
        words.push(word)
      }
      return words
    }
  }
})()
