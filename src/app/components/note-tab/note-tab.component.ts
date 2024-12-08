import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-note-tab',
  standalone: true,
  imports: [InputTextareaModule,ReactiveFormsModule,FileUploadModule, ToastModule],
  templateUrl: './note-tab.component.html',
  styleUrl: './note-tab.component.css',
  providers: [MessageService]
})
export class NoteTabComponent {
  formGroup!: FormGroup;

  ngOnInit() {
      this.formGroup = new FormGroup({
          text: new FormControl<string | null>(null)
      });
  }
}
