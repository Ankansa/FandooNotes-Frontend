import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../Services/Note/note.service';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent implements OnInit {

  usernote:any;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.allnote()
  }


  allnote(){
    this.noteService.getAllNote().subscribe((items:any) => {
      console.log("User all notes are : ",items);
      this.usernote=items.data

  },(error: any) => {
    console.log(error);
  })
  }



}