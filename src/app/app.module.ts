import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {InitialComponent} from './components/initial/initial.component';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {SkillsComponent} from './components/skills/skills.component';
import {AnimationDirective} from "./components/shared/animation.directive";
import {DirectiveSkills} from "./components/shared/animations";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainPageComponent,
        InitialComponent,
        AboutMeComponent,
        ProjectsComponent,
        SkillsComponent,
        AnimationDirective,
        DirectiveSkills
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatMenuModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatIconModule,
        FontAwesomeModule
    ],
    providers: [
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
