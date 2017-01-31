import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Http } from '@angular/http';

@Injectable()
export class DocumentService extends CrudService {

  constructor(http: Http) {
      super(http);
      this.init();
   }

   init() {
     this.dataURL = '/documents';
     super.init();
   }

}
