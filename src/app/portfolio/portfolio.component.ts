import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'Expense Manager',
      summary: 'The project developed using the MERN stack is an expense management system that helps individuals track and manage their expenses. The project includes features like User Registration and Authentication, Expense Input, Expense Categorization, Expense List, Graphical Representation and Expense Analytics',
      description: '',
      projectLink: 'https://github.com/razat13/ExpenseManager',
      tags: [Tag.NODEJS, Tag.REACTJS, Tag.EXPRESS, Tag.MONGODB, Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT],
      pictures: ["../../assets/casino01.png", "../../assets/casino02.png"]
    },
    {
      id: 2,
      name: 'Movie Overview',
      summary: 'React-Based Entertainment Application.Where users can see an overview of 20 popular movies, top-rated movies, and upcoming movies.',
      projectLink: 'https://github.com/razat13/Movie-Overview',
      tags: [Tag.REACTJS,Tag.HTML5, Tag.CSS3, Tag.JAVASCRIPT],
      pictures: ["../../assets/pokedex_01.png", "../../assets/pokedex_02.png", "../../assets/pokedex_03.png"],
      description: ''
    },
    {
      id: 3,
      name: 'FakeShop Online',
      summary: 'FakeShop is an online shopping platform where users can browse through a variety of products, view product details, add products to their cart, and proceed to checkout. This project is built using React.js and interacts with the FakeStoreAPI to fetch product data.',
      description: '',
      projectLink: 'https://github.com/razat13/MakerStudioProject',
      tags: [Tag.REACTJS,Tag.JAVASCRIPT, Tag.HTML5, Tag.CSS3],
      pictures: ["../../assets/teamtrack_06.png", "../../assets/teamtrack_07.png", "../../assets/teamtrack_08.png"]
    },
    {
      id: 4,
      name: 'Personal PortFolio',
      summary: 'I built a fully responsive personal portfolio website using Angular to showcase my development skills and projects. The portfolio features a clean, modern design with smooth navigation, highlighting key projects and technical expertise. Through effective use of Angular’s components and services, I implemented dynamic features like interactive galleries, form handling, and seamless routing. ',
      description: '',
      projectLink: 'https://github.com/razat13/Razat-Portfolio',
      tags: [Tag.ANGULAR,Tag.JAVASCRIPT, Tag.HTML5, Tag.CSS3],
      pictures: ["../../assets/portfolio1.png", "../../assets/portfolio2.png"]
    },
  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('Razat Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
