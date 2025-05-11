import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  public year = new Date().getFullYear();

  public footerNav = [
    {
      title: 'Мы и Наши продукты',
      list: [
        'О компании',
        'tLab',
        'tMail (coming soon)',
        'OmniConsole (coming soon)',
      ],
    },
    {
      title: 'Обучение',
      list: ['Курсы', 'Учебное пособие'],
    },
    {
      title: 'Ресурсы',
      list: ['Исследования', 'Новости и пресса'],
      social: [
        {
          icon: 'icons/social/x.svg',
          link: '#',
        },
        {
          icon: 'icons/social/instagram.svg',
          link: '#',
        },
        {
          icon: 'icons/social/linkedin.svg',
          link: 'https://www.linkedin.com/company/tlabtech/posts/?feedView=all',
        },
      ],
    },
  ];
}
