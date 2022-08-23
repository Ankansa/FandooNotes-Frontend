import { identifierName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor(private noteService: NoteService, private snakber:MatSnackBar) { }

  ngOnInit(): void {
  }

  @Input() childNoteID: any         // Recive the note id from get all note
  @Input() archiveStatus: any


  moveTrash() {
    console.log("From icons.compund.ts ......this.childNoteID :- ", this.childNoteID)
    this.noteService.trashNote(this.childNoteID).subscribe((responce: any) => {
      console.log(responce)
      this.snakber.open("Note trashed successfull","Ok",{duration:4000})

    }, error => {
      console.log(error)
    })
  }





  archive() {

    console.log("From icons.compund.ts ......this.childNoteID :- ", this.childNoteID)
    this.noteService.archivenote(this.childNoteID).subscribe((responce: any) => {
      console.log(responce)
      this.snakber.open("Note archive successfull","Ok",{duration:4000})

    }, error => {
      console.log(error)
    })

  }

  unarchive() {
    console.log("From icons.compund.ts ......this.childNoteID :- ", this.childNoteID)
    this.noteService.unarchivenote(this.childNoteID).subscribe((responce: any) => {
      console.log(responce)
      this.snakber.open("Note unarchive successfull","Ok",{duration:4000})

    }, error => {
      console.log(error)
    })
  }



  colorcode = [
    [
      { color: "#fff" },
      { color: "#ff1a1a" },
      { color: "#0040ff" },
      { color: "#40ff00" },
    ],

    [
      { color: "#fbbc04" },
      { color: "#a7ffeb" },
      { color: "#cbf0f8" },
      { color: "#aecbfa" }
    ],

    [
      { color: "#d7aefb" },
      { color: "#fdcfe8" },
      { color: "#e6c9a8" },
      { color: "#e8eaed" }
    ]
  ];



changeColor(color:any){
  console.log(color);
  let requestData = {
    'color': color,
  }
  this.noteService.changeColor(this.childNoteID,requestData).subscribe((responce:any)=>{
    console.log("color change :",responce)
    this.snakber.open("Note color changed successfully","Ok",{duration:4000})
  })
  
}

}
