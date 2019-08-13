import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-stop-training',
  template: `
    <h1 mat-dialog-title>Ви впевнені?</h1>
    <mat-dialog-content>
      <p>Progress {{ passedData.progres }}%</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]='true'>ТАК</button>
      <button mat-button [mat-dialog-close]='false'>НІ</button>
    </mat-dialog-actions>
  `
})
export class StopTrainingComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}

  ngOnInit() {}
}
