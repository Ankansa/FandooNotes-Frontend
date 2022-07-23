import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/Services/Note/note.service';
@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  addnoteform: FormGroup;
  submitted = false;

  hide = false;

  constructor(private formBuilder: FormBuilder, private noteService: NoteService) { }


  ngOnInit() {
    this.addnoteform = this.formBuilder.group({
      Title: ['', Validators.required],
      Descreption: ['', Validators.required],
    });

  }



  display() {
    if (this.hide == false) {
      this.hide = true
    }else{
      this.hide = false
    }
  }

  addnote() {
    // console.log("Addnote function called");
    if (this.addnoteform.valid) {
      console.log(this.addnoteform.value);
      let requestData={
        Title: this.addnoteform.value.Title,
        Descreption: this.addnoteform.value.Descreption
      }
      this.noteService.addnote(requestData).subscribe((data) => {
        console.log(data);

      }, (error: any) => {
        console.log(error);
      })
    }

  }

}
