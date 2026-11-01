import { Component, inject } from '@angular/core';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { EducationSection } from './components/education/education';
import { ExperienceSection } from './components/experience/experience';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    About,
    Skills,
    ExperienceSection,
    Projects,
    EducationSection,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
})
export class App {
  // instancia o serviço cedo para aplicar o tema salvo antes da primeira renderização
  private readonly theme = inject(ThemeService);
}
