import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-trash-view',
  templateUrl: './trash-view.component.html',
  styleUrls: ['./trash-view.component.scss']
})
export class TrashViewComponent implements OnInit {
  filterArrayNote = new Array(); 

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.allnote()
  }


  allnote() {
    this.noteService.getAllNote().subscribe((items: any) => {
      console.log("User all notes are : ", items);
      for (var i of items.data) {
        if (i.isDeleted == true) {
          this.filterArrayNote.push(i)
        }
      }
      console.log("The filterArrayNote is : ", this.filterArrayNote);

      
    }, (error: any) => {
      console.log(error);
    })

  }

}
