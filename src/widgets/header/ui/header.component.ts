import { DOCUMENT } from '@angular/common';
import { Component, Inject, LOCALE_ID, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  constructor(
    @Inject(DOCUMENT) public doc: Document,
    @Inject(LOCALE_ID) public currentLocale: string,
  ) {}
  public locales = [
    {
      localeCode: 'ru',
      label: 'рус',
    },
    {
      localeCode: 'en-US',
      label: 'eng',
    },
  ];
  public menuList = [
    {
      title: $localize`:@@products:Продукты`,
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
