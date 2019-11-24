import { Injectable } from '@nestjs/common';

@Injectable()
export class WordsService {
  private readonly words = [];

  addWord(word: string): string[] {
    this.words.push(word);
    return this.words;
  }

  getWords(): string[] {
    return this.words;
  }
}
