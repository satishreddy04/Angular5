import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { WebcamImage } from 'ngx-webcam';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-jedi-enrollment',
	templateUrl: './jedi-enrollment.component.html',
	styleUrls: ['./jedi-enrollment.component.css']
})
export class JediEnrollmentComponent implements OnInit {
	@ViewChild('closebtn') closebtn: ElementRef;
	name: string;
	email: string;
	quote: string;
	isms: string;
	private enrollform: FormGroup;
	hideModal: boolean = false;
	enrollmentData = [
		{
			email: '123456789@gmail.com',
			immage: 'https://qph.fs.quoracdn.net/main-qimg-9fbe8676c42ae0f5f6ac50f956c9e2ae-c',
			name: 'Star Wars ',
			quote:
				'One of my personal favorite lines in Star Wars, C-3P0 says this on reuniting with Han and Chewie in The Force Awakens. But why would having a red arm render him unrecognizable? What happened to the arm? Why does 3P0 think anyone cares about the arm with the First Order wreaking havoc across the galaxy? All these questions are answered in Star Wars books and comics,'
		}
	];
	currentImageData: string;
	constructor(fb: FormBuilder) {
		this.enrollform = fb.group({
			name: new FormControl(null, Validators.required),
			email: new FormControl(null, [Validators.required, Validators.email]),
			quote: new FormControl(null, Validators.required)
		});
	}
	// toggle webcam on/off
	public showWebcam = true;

	// latest snapshot
	public webcamImage: WebcamImage = null;

	// webcam snapshot trigger
	private trigger: Subject<void> = new Subject<void>();
	formControlName = 'email';
	public triggerSnapshot(e): void {
		e.preventDefault();
		this.trigger.next();
		this.showWebcam = !this.showWebcam;
	}

	public toggleWebcam(): void {
		this.showWebcam = !this.showWebcam;
	}

	public handleImage(webcamImage: WebcamImage): void {
		console.info('received webcam image', webcamImage);
		this.webcamImage = webcamImage;
		this.currentImageData = this.webcamImage.imageAsDataUrl;
	}

	public get triggerObservable(): Observable<void> {
		return this.trigger.asObservable();
	}

	onSubmit(enrollform: any) {
		this.enrollform.value.image = this.currentImageData;
		this.enrollmentData.push(this.enrollform.value);
		this.enrollform.reset();
		this.closeModal();
		var s = document.getElementById('exampleModal');
	}
	closeModal() {
		this.closebtn.nativeElement.click();
	}

	ngOnInit() {}
}
