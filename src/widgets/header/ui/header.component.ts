import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
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
}
