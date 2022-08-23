import { Component, OnDestroy, OnInit } from '@angular/core';
import { NoteService } from '../../Services/Note/note.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/Services/Data/data.service';


@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent implements OnInit {

  usernote = new Array();

  searchString: any;


  constructor(private noteService: NoteService, private dialog: MatDialog, private data: DataService) { }

  ngOnInit(): void {
    this.allnote()
    this.data.currentMessage.subscribe(message => this.searchString = message)
  }
 


  allnote() {
    this.noteService.getAllNote().subscribe((items: any) => {
      console.log("User all notes are : ", items);
      for (var i of items.data) {
        if (i.isArchived == false && i.isDeleted == false) {
          this.usernote.push(i)
        }
      }
      console.log("The filterArrayNote is : ", this.usernote);


    }, (error: any) => {
      console.log(error);
    })

  }

  

  // For Update Note data sharing ####################

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