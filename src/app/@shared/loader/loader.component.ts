import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() size = 2.5;
  @Input() strokeWidth = 8;
  @Input() message: string | undefined;

  constructor() {}

  ngOnInit() {}
}
