import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../Services/Note/note.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent implements OnInit {

  usernote: any;

  constructor(private noteService: NoteService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.allnote()
  }


  allnote() {
    this.noteService.getAllNote().subscribe((items: any) => {
      console.log("User all notes are : ", items);
      this.usernote = items.data

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