import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-trash-view',
  templateUrl: './trash-view.component.html',
  styleUrls: ['./trash-view.component.scss']
})
export class TrashViewComponent implements OnInit {
  filterArrayNote = new Array(); 

  constructor(private noteService: NoteService, private snakber: MatSnackBar) { }

  ngOnInit(): void {
    this.trashNote()
  }

  trashNote() {
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


delete(id:any){

  console.log("From icons.compund.ts ......this.id :- ", id)
  this.noteService.deleteNote(id).subscribe((responce: any) => {
    console.log(responce)
    this.snakber.open("Note deleted successfully","Ok",{duration:4000})

  }, error => {
    console.log(error)
  })
}


restore(id:any){
  console.log("From icons.compund.ts ......this.id :- ", id)
  this.noteService.restoreTrash(id).subscribe((responce: any) => {
    console.log(responce)
    this.snakber.open("Note restore successfully","Ok",{duration:4000})

  }, error => {
    console.log(error)
  })
}



openDialog(){
  this.snakber.open("Can’t edit in Recycle Bin","Ok",{duration:4000})
};

}
 