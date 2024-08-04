import { Component } from '@angular/core';
import { ApiFacultyService } from '../api-faculty.service';
import { Faculty } from '../faculty';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {

  faculty: Faculty[] = [];
  constructor(private _apifaculty: ApiFacultyService) { }

  ngOnInit() {
    this._apifaculty.getAll().subscribe((res: any) => {
      this.faculty = res;
    })
  }
}
