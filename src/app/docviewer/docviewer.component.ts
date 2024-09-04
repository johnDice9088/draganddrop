import { Component, OnInit } from '@angular/core';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@Component({
  selector: 'app-docviewer',
  templateUrl: './docviewer.component.html',
  styleUrls: ['./docviewer.component.css'],
})
export class DocviewerComponent {
  doc:any = 'https://files.fm/down.php?i=axwasezb&n=SSaD.docx';
viewer: any='google';
selectedType: any = 'docx';

  ngOnInit(){
    this.doc ="https://files.fm/down.php?i=axwasezb&n=SSaD.docx"
    this.viewer = 'google';
    this.selectedType = 'pptx';
}
  constructor(){
  }
}
