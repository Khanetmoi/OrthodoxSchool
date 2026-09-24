// Central lookup — the only place that knows how lessons map to tracks.

import { LESSONS_WORD } from './lessons-word.js';
import { LESSONS_EXCEL } from './lessons-excel.js';
import { LESSONS_PPT } from './lessons-ppt.js';

export const ALL_LESSONS = {
  word: LESSONS_WORD,
  excel: LESSONS_EXCEL,
  ppt: LESSONS_PPT
};