import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  constructor(@Inject(DOCUMENT) public doc: Document) {}

  public menuList = [
    {
      title: 'Продукты',
      subMenuList: ['tLab', 'tMail (скоро)'],
    },
    {
      title: 'Ресурсы',
      subMenuList: ['Исследования', 'Новости и пресса'],
    },
    {
      title: 'VirLab',
      subMenuList: ['Описание', 'Исследования', 'Мониторинг угроз'],
    },
    {
      title: 'Обучение',
      subMenuList: ['Курсы'],
    },
    {
      title: 'О компании',
    },
  ];
  public toggleMenu() {
    this.doc.documentElement.classList.toggle('menu-open');
  }
}
