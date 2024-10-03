import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-demodraganddrop',
  templateUrl: './demodraganddrop.component.html',
  styleUrls: ['./demodraganddrop.component.css'],
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, NgFor, CdkDrag,NgIf],
})
export class DemodraganddropComponent {
  @ViewChild('canvasElement', { static: true }) canvasElement!: ElementRef<HTMLCanvasElement>;

  private firstImage: HTMLImageElement | null = null;
  private secondImage: HTMLImageElement | null = null;
  private canvasContext: CanvasRenderingContext2D | null = null;
  constructor() { }
  ngOnInit() {
    const canvas = this.canvasElement.nativeElement;
    this.canvasContext = canvas.getContext('2d');
    if (!this.canvasContext) {
      console.error('Failed to get 2D context');
      return;
    }
  }
  onFirstImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.firstImage = new Image();
        this.firstImage.src = e.target.result;
        this.firstImage.onload = () => {
          this.drawImages();
        };
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onSecondImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.secondImage = new Image();
        this.secondImage.src = e.target.result;
        this.secondImage.onload = () => {
          this.drawImages();
        };
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  drawImages() {
    if (this.firstImage  && this.canvasContext) {
      // Clear the canvas
      this.canvasContext.clearRect(0, 0, this.canvasElement.nativeElement.width, this.canvasElement.nativeElement.height);

      // Draw the first image
      this.canvasContext.drawImage(this.firstImage, 0, 0, 800, 600);

      // Draw the second image at the desired position
      if (this.secondImage) {
        // Set the position (for example, placing it at (x, y))
        const x = 200;  // Customize this based on where you want the second image to appear
        const y = 150;  // Customize this too
        this.canvasContext.drawImage(this.secondImage, x, y, this.secondImage.width / 2, this.secondImage.height / 2);
      }
    }
  }
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  // drop(event: CdkDragDrop<string[]>) {
  //   console.log(event.currentIndex,event.previousIndex,event.container.data)
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex,
  //     );
  //   }
  // }
  // drop(event: any) {
  //   console.log(event);
  //   this.overlayX = event.clientX - 40; // Adjust to center the image
  //   this.overlayY = event.clientY - 39;
  //   // console.log(event.currentIndex,event.previousIndex,event.container.data)
  //   // if (event.previousContainer === event.container) {
  //   //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   // } else {
  //   //   transferArrayItem(
  //   //     event.previousContainer.data,
  //   //     event.container.data,
  //   //     event.previousIndex,
  //   //     event.currentIndex,
  //   //   );
  //   // }
  // }
  // baseImage: string | undefined;
  // overlayImage: string | undefined;
  // mergedImage: string | undefined;
  // canvawidth: number | undefined;
  // canvaheight: number | undefined;

  // overlayX: number = 0;
  // overlayY: number = 0;
  // isDragging: boolean = false;

  // onSelectBaseImage(event: any) {
  //   console.log(event);
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = (e) => {
  //     this.baseImage = e.target?.result as string;
  //   };

  //   reader.readAsDataURL(file);
  // }

  // onSelectOverlayImage(event: any) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();

  //   reader.onload = (e) => {
  //     this.overlayImage = e.target?.result as string;
  //   };

  //   reader.readAsDataURL(file);
  // }

  // onDragStart(event: MouseEvent) {
  //   this.isDragging = true;
  // }

  // onDrag(event: MouseEvent) {
  //   console.log(event)
  //   if (this.isDragging) {
  //     this.overlayX = event.clientX; // Adjust to center the image
  //     this.overlayY = event.clientY; // Adjust to center the image
  //   }
  // }

  // onDragEnd() {
  //   this.isDragging = false;
  // }

  // mergeImages() {
  //   if (!this.baseImage || !this.overlayImage) return;

  //   const canvas = document.createElement('canvas');
  //   const ctx = canvas.getContext('2d');

  //   const baseImg = new Image();
  //   const overlayImg = new Image();

  //   baseImg.src = this.baseImage;
  //   overlayImg.src = this.overlayImage ;

  //   baseImg.onload = () => {
  //     overlayImg.onload = () => {
  //       // if(this.canvawidth != undefined){
  //       canvas.width = baseImg.width +10;
  //       canvas.height = baseImg.height + 15;
  //       // }

  //       // Draw base image
  //       ctx?.drawImage(baseImg, 0, 0);

  //       // Draw overlay image at specified position
  //       ctx?.drawImage(
  //        overlayImg,30, canvas.height - overlayImg.height
  //       );

  //       // Get the merged image as data URL
  //       this.mergedImage = canvas.toDataURL('image/png');
  //     };
  //   };
  // }
  // dragPositionX: number = 0;
  // dragPositionY: number = 0;
  // onDragMoved(event: any): void {
  //   console.log(event)
  //   // Get the exact x and y coordinates of the dragged element
  //   const { x, y } = event.pointerPosition;
  //   console.log(x,y)
  //   this.dragPositionX = x;
  //   this.dragPositionY = y;
  // }
  
}
