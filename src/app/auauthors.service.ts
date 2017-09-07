import { Injectable } from '@angular/core';

@Injectable()
export class AuauthorsService {

  getAuthors(){
    return ["Author1","Author2","Author3"]
  }

}
