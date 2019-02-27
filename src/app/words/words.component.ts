import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {

  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
];
  enWord = '';
  vnWord = '';
  isShowForm = false;
  filterStatus = 'VIEW_ALL';
  constructor() { }

  ngOnInit() {
  }

  addWord() {
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.enWord,
      vn: this.vnWord,
      memorized: false
    });
    this.enWord = '';
    this.vnWord = '';
  }
  showForm() {
    this.isShowForm = !this.isShowForm;
  }
  removeWord(id: number) {
    const index = this.arrWords.findIndex(item => item.id === id);
    this.arrWords.splice(index, 1);
  }
  getShowStatus(memorized: boolean) {
    const viewAll = this.filterStatus === 'VIEW_ALL';
    const viewMemorized = this.filterStatus === 'MEMORIZED' && memorized;
    const viewNotMemorized = this.filterStatus === 'NOT_MEMORIZED' && !memorized;
    return viewAll || viewMemorized || viewNotMemorized;
  }
}
