import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Overlay } from 'angular2-modal';

import { AuthActions } from './auth';
import { IAppState } from './store';

@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: [
		'./core/base-styles/_base.scss',
		'./app.component.scss',
		'./shared/single-components/c-page.scss',
		'./shared/single-components/c-link.scss',
		'./shared/single-components/c-button.scss',
		'./shared/single-components/c-textbox.scss',
	],
	encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
	constructor(
		overlay: Overlay,
		vcRef: ViewContainerRef,
		private store: Store<IAppState>,
		private authActions: AuthActions) {

		overlay.defaultViewContainer = vcRef;
		const token = localStorage['token'];
		if (token) {
			// this.store.dispatch(this.authActions.me(token));
		}
	}

	ngOnInit(): void {}

	ngOnDestroy(): void { }

}
