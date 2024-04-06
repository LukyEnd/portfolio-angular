import {Component, ElementRef, OnInit} from '@angular/core';
import {ScrollService} from "../shared/services/scroll.service";

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

    constructor(
        private serviceScroll: ScrollService,
        private elementRef: ElementRef
    ) {
    }

    ngOnInit(): void {
        this.serviceScroll.currentSectionId.subscribe((id: string): void => {
            if (id) {
                const element = this.elementRef.nativeElement.querySelector(`#${id}`);
                if (element) {
                    element.scrollIntoView({behavior: 'smooth', block: 'start'});
                }
            }
        })
    }

    public redirecionarParaGitHub(projeto: number): void {
        const url: string = projeto === 1 ?
            'https://github.com/LukyEnd/datapoa-angular-material-ngrx' :
            'https://github.com/LukyEnd/rick-and-morty-angular-ngrx';

        window.open(url, '_blank');
    }
}
