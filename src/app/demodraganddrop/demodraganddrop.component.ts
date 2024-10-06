import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
  CdkDragMove,
} from '@angular/cdk/drag-drop';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
  baseImage: string | ArrayBuffer | null = null;
  overlayImage: string | ArrayBuffer | null = null;
  mergedImage: string | ArrayBuffer | null = null;
  overlayPosition = { x: 0, y: 0 };
  safeUrl: SafeUrl | undefined;
  url: string | ArrayBuffer | null | undefined;

  constructor(private sanitizer: DomSanitizer) {}
  // ngOnInit() {
  //   const canvas = this.canvasElement.nativeElement;
  //   this.canvasContext = canvas.getContext('2d')!;
  //   if (!this.canvasContext) {
  //     console.error('Failed to get 2D context');
  //     return;
  //   }
  // }
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

  overlayX: number = 0;
  overlayY: number = 0;
  isDragging: boolean = false;

  onSelectBaseImage(event: any) {
    console.log(event);
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      this.baseImage = e.target?.result as string;
    };

    reader.readAsDataURL(file);
  }

  onSelectOverlayImage(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      this.overlayImage = e.target?.result as string;
      console.log(this.overlayImage)
    };

    reader.readAsDataURL(file);
  }



  onDrag(event: any) {
    const baseImageElement = document.querySelector('.base-image') as HTMLImageElement;
  const baseImageRect = baseImageElement.getBoundingClientRect();
    console.log(event)
    console.log(baseImageRect)
    this.overlayX = event.event.clientX  -event.event.offsetX; // Adjust to center the image
      this.overlayY = event.event.clientY -event.event.offsetY; // Adjust to center the image
      
    this.overlayX = this.overlayX - baseImageRect.left;  // X relative to the base image
    this.overlayY = this.overlayY - baseImageRect.top;   // Y relative to the base image
  
    console.log('Drag X:', this.overlayX, 'Drag Y:', this.overlayY);

    if (this.isDragging) {
      this.overlayX = event.event.offsetX; // Adjust to center the image
      this.overlayY = event.event.offsetY; // Adjust to center the image
    }
  }

  mergeImages() {
    if (!this.baseImage || !this.overlayImage) return;

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    let baseImg = new Image();
    let overlayImg = new Image();

    baseImg.src = this.baseImage as string;
    overlayImg.src = this.overlayImage as string;
    baseImg.onload = () => {
      overlayImg.onload = () => {
        // Set canvas size to match base image size
        canvas.width = baseImg.width;
        canvas.height = baseImg.height;
  
        // Calculate scaling factor for overlay image if needed
        let scaleX = canvas.width / overlayImg.width;
        let scaleY = canvas.height / overlayImg.height;
  
        // Optional: Maintain aspect ratio by using the smaller scale
        let widthScaleFactor = 0.38; // Increase width by 10%
        let heightScaleFactor = 0.1 ;
  
        // Calculate the new width and height for the overlay image
        let overlayWidth = overlayImg.width * scaleX * widthScaleFactor;
        let overlayHeight = overlayImg.height * scaleY * heightScaleFactor;
        console.log(overlayWidth,overlayHeight)
  
        const baseImageElement = document.querySelector('.base-image') as HTMLImageElement;
        const baseImageRect = baseImageElement.getBoundingClientRect();
  
        // Adjust the overlay position to the canvas using proportional scaling
        let adjustedOverlayX = (this.overlayX / baseImageRect.width) * canvas.width;
        let adjustedOverlayY = (this.overlayY / baseImageRect.height) * canvas.height;
  
        console.log('Adjusted X:', adjustedOverlayX, 'Adjusted Y:', adjustedOverlayY);
        console.log(adjustedOverlayX)
        console.log(adjustedOverlayY)
  
        // Draw base image
        ctx?.drawImage(baseImg, 0, 0);
  
        // Draw the scaled overlay image at the specified position
        ctx?.drawImage(
          overlayImg,
          adjustedOverlayX,
          adjustedOverlayY,
          overlayWidth,
          overlayHeight // Scale overlay to match base image proportions
        );
  
        // Get the merged image as a data URL
        this.mergedImage = canvas.toDataURL('image/png');
      };
    };

    // baseImg.onload = () => {
    //   overlayImg.onload = () => {
    //     // if(this.canvawidth != undefined){
    //     canvas.width = baseImg.width ;
    //     canvas.height = baseImg.height;
    //     console.log(overlayImg.width,overlayImg.height)
      
    //     console.log(overlayImg.width,overlayImg.height)
    //     console.log("canvas height",canvas.height)  
    //     console.log("add canvs height + normal y", canvas.height + this.overlayY )  
    //     console.log("find y",canvas.height + this.overlayY - canvas.height )  
    //     console.log("find the exact div from the blurred image",(canvas.height + this.overlayY )- (canvas.height - this.overlayY))  
    //     // }

    //     // Draw base image
    //     ctx?.drawImage(baseImg, 0, 0);
    //     console.log(this.overlayX,this.overlayY-canvas.height)

    //     // Draw overlay image at specified position
    //     ctx?.drawImage(
    //       overlayImg,
    //       0, 0,                    // Position on canvas
    //       overlayImg.width, overlayImg.height     // Use the original width and height of the overlay image
    //     );
    //     // Get the merged image as data URL
    //     this.mergedImage = canvas.toDataURL('image/png');
    //   };
    // };
  //   baseImg.onload = () => {
  //     overlayImg.onload = () => {
  //         // Set canvas dimensions to match base image dimensions
  //         canvas.width = baseImg.width;
  //         canvas.height = baseImg.height;
  
  //         // Set the desired dimensions for the overlay image
  //         const overlayWidth = 217;
  //         const overlayHeight = 40;
  
  //         // Log original and modified overlay image dimensions
  //         console.log("Original overlay dimensions:", overlayImg.width, overlayImg.height);
  //         console.log("Setting overlay to:", overlayWidth, overlayHeight);
  
  //         // Draw the base image onto the canvas
  //         ctx?.drawImage(baseImg, 0, 0);
  
  //         // Draw the overlay image with specified dimensions at the desired position
  //         const overlayX = 288;  // X position for the overlay
  //         const overlayY = 353;  // Y position for the overlay
  //         ctx?.drawImage(overlayImg, overlayX, overlayY, overlayWidth, overlayHeight);
  
  //         // Get the merged image as data URL
  //         this.mergedImage = canvas.toDataURL('image/png');
  //     };
  // };
  
  }
  dragPositionX: number = 0;
  dragPositionY: number = 0;
  onDragMoved(event: any): void {
    console.log(event)
    // Get the exact x and y coordinates of the dragged element
    const { x, y } = event.pointerPosition;
    console.log(x,y)
    this.dragPositionX = x;
    this.dragPositionY = y;
  }
//   onSelectBaseImage(event: Event): void {
//     const file = (event.target as HTMLInputElement).files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = e => {
//         if (e.target?.result) {
//           this.baseImage = e.target.result;
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   }

//   onSelectOverlayImage(event: Event): void {
//     const file = (event.target as HTMLInputElement).files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = e => {
//         if (e.target?.result) {
//           this.overlayImage = e.target.result;
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   }

//   onDrag(event: CdkDragMove): void {
//     console.log(event)
//     this.overlayPosition = {
//       x: event.pointerPosition.x,
//       y: event.pointerPosition.y
//     };
//   }

//   mergeImages(): void {
//     const canvas = document.createElement('canvas');
//     const context = canvas.getContext('2d');

//     if (context && this.baseImage && this.overlayImage) {
//       const baseImg = new Image();
//       const overlayImg = new Image();

//       baseImg.src = this.baseImage as string;
//       overlayImg.src = this.overlayImage as string;

//       baseImg.onload = () => {
//         canvas.width = baseImg.width;
//         canvas.height = baseImg.height;
//         context.drawImage(baseImg, 0, 0);

//         overlayImg.onload = () => {
//           context.drawImage(overlayImg, this.overlayPosition.x, this.overlayPosition.y);
//           this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(canvas.toDataURL());
//           this.url = this.safeUrl as string;
//         };
//       };
//     }

// }
}
