import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { AngularBugsAnswersComponent } from './component/blog/angular-bugs-answers/angular-bugs-answers.component';
import { BlogComponent } from './component/blog/blog.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { NavComponent } from './component/nav/nav.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './component/cv/cv.component';

// import { NavComponent }
const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent },
  {path: 'home', component: HomeComponent},
  {path: 'cv', component: CvComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'angular-bugs-answers', component: AngularBugsAnswersComponent}

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
