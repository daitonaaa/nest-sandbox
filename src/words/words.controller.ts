import { Controller, Get, Param, Post } from '@nestjs/common';
import { WordsService } from './words.service';

@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get()
  getWords(): string[] {
    return this.wordsService.getWords();
  }

  @Post(':word')
  addWord(@Param('word') word: string): string[] {
    return this.wordsService.addWord(word);
  }
}
