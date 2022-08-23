import { identifierName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
  }

@Input()childNoteID:any

moveTrash(){
  let id={
cardId:[this.childNoteID],

// isDeleted:true,
  }

  console.log("From icons.compund.ts ......this.childNoteID :- ",this.childNoteID)
  this.noteService.trashNote(this.childNoteID).subscribe((responce:any)=>{
    console.log(responce)
  
},error=>{
  console.log(error)
})
}
}
