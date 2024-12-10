import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
 url="http://localhost:4000/api/notes/"
  constructor(private http:HttpClient ,private loginService :LoginService) { }
  addNote(note:{ text: string; images: File[]} ){
     const id = this.loginService.getUserId();
    const formData= new FormData();
     formData.append('text', note.text);
     formData.append('userId', id);
     note.images.forEach((file,index)=>{
      formData.append('noteAttachment',file);
     })
      return this.http.post(this.url,formData,{withCredentials: true });
  }
}
