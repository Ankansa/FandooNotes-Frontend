import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/Services/Note/note.service';
import { GetAllNoteComponent } from '../get-all-note/get-all-note.component';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  // Data binding#######################

  title: any;
  description: any;
  id: any;
  color: any;
  isArchive: any;
  constructor(
    public dialogRef: MatDialogRef<GetAllNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteService, private formBuilder: FormBuilder, private snakber: MatSnackBar
  ) {
    this.title = data.Title;
    this.description = data.Descreption;
    this.id = data._id;
    this.color = data.color;


  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // For update note#################

  // Data binding ##############
  updatenoteform: FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.updatenoteform = this.formBuilder.group({
      Title: [this.title, Validators.required],
      Descreption: [this.description, Validators.required],
    });

  }

  // API Intrigration ############

  update() {
    if (this.updatenoteform.valid) {
      console.log(this.updatenoteform.value);
      let requestData = {
        Title: this.updatenoteform.value.Title,
        Descreption: this.updatenoteform.value.Descreption
      }
      this.noteService.update(this.id, requestData).subscribe((responce) => {
        console.log(responce);
        this.snakber.open("Note sucessfully updated", "Ok", { duration: 4000 })

      }, (error: any) => {
        console.log(error);
      })
    }

  }


}
