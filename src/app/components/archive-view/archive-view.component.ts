import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/Note/note.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-archive-view',
  templateUrl: './archive-view.component.html',
  styleUrls: ['./archive-view.component.scss']
})
export class ArchiveViewComponent implements OnInit {

  filterArrayNote = new Array(); 

  constructor(private noteService: NoteService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.allnote()
  }


  allnote() {
    this.noteService.getAllNote().subscribe((items: any) => {
      console.log("User all notes are : ", items);
      for (var i of items.data) {
        if (i.isArchived == true && i.isDeleted == false) {
          this.filterArrayNote.push(i)
        }
      }
      console.log("The filterArrayNote is : ", this.filterArrayNote);


    }, (error: any) => {
      console.log(error);
    })

  }



// For update from archive section##

openDialog(item: any): void {
  const dialogRef = this.dialog.open(UpdateNoteComponent, {
    width: "40%",
    data: item,
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed', result);

  });
}





}
