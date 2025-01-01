import { Component ,Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { NoteServiceService } from '../../services/note/note-service.service';

@Component({
  selector: 'app-note-tab',
  standalone: true,
  imports: [InputTextareaModule,ReactiveFormsModule,FileUploadModule,ToastModule,CommonModule],
  templateUrl: './note-tab.component.html',
  styleUrl: './note-tab.component.css',
  providers: [MessageService]
})
export class NoteTabComponent {
  formGroup!: FormGroup;
  noteId:string="";
  selectedFiles: File[] = [];
  @Output() noteEvent = new EventEmitter<string>();
  constructor( private fb : FormBuilder, private Note: NoteServiceService){ }
  ngOnInit() {
    this.formGroup = this.fb.group ({
      text : ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  onFileSelect(event: any): void {
    this.selectedFiles = event.files;
  }
  OnSubmit(){
   if(this.formGroup.invalid || this.selectedFiles.length===0){
     console.log("form invalid")
     return;
   }
   const noteData={
    text: this.formGroup.value.text,
    images: this.selectedFiles,
   }
   this.Note.addNote(noteData).subscribe({
    next:(res:any)=>{console.log(res);
      this.noteId=res.note.text;
      this.noteEvent.emit(this.noteId);
      this.noteId="";
    },
      error:(err)=>{console.log(err);},
      complete:()=>{this.formGroup.reset();}
   })


  }
}
