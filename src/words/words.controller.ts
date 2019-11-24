import { Controller, Get, Param, Post, ForbiddenException, UseFilters } from '@nestjs/common';
import { WordsService } from './words.service';
import { HttpExceptionFilter } from './exception.filter';

@Controller('words')
@UseFilters(new HttpExceptionFilter())
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

  @Get('for')
  forb() {
    throw new ForbiddenException();
  }
}
