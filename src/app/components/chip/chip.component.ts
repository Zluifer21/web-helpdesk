import {MaterializeDirective,MaterializeAction} from "angular2-materialize";
import {Component,EventEmitter} from "@angular/core";
import {SubjectService} from '../../services/subject/subject.service';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent {
public subjects:any[];
public filteredsubjects;
uploadedFiles: any[] = [];


constructor(private _subjects:SubjectService)
{
  this._subjects.getSubjects().subscribe(res=>{this.subjects=res},err=>{console.log(err);});
}

filterSubject(event) {
   let query = event.query;
   this.filteredsubjects = this.filterSubjects(query, this.subjects);
     }

 filterSubjects(query, subjects: any[]):any[] {
   let filtered : any[] = [];
   for(let i = 0; i < subjects.length; i++) {
   if(subjects[i].name.toLowerCase().indexOf(query.toLowerCase()) == 0)
   {
   filtered.push(subjects[i]);
   }
   }
   return filtered;
}
onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }


}
myUploader(event) {
  for(let file of event.files) {
      this.uploadedFiles.push(file);
  }
  console.log(this.uploadedFiles);
}
}
