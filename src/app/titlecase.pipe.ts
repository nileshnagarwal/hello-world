import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string): any {
    
    if (!value) return null;

    let words = value.split(" ");

    for (var i=0; i<words.length; i++){
      let word = words[i];

      if (this.ifPreposition(word) && i>0)
        words[i] = word.toLowerCase();
      else
        words[i] = this.toTitleCase(word);
    }

    return words.join(" ");
  }

  private ifPreposition(word: string){
    
    let prepositions = [
      "the",
      "of",
      "is",
      "a"
    ]

      if (prepositions.includes(word.toLowerCase())) return true;
  
  }

  private toTitleCase(word: string){
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  }
}
