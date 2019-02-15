import React, { Component } from 'react';

import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import StepFive from './steps/StepFive';

import StepWizard from '../wizard/StepWizard';

export default class Example extends Component {
		render() {

				const steps = [
						{ name: 'This is', component: <StepOne />, preventNext: false },
						{ name: 'Only one', component: <StepTwo />, preventNext: false },
						{ name: 'Example', component: <StepThree />, preventNext: true },
						{ name: 'Step by step', component: <StepFour />, preventNext: false },
						{ name: 'Form', component: <StepFive />, preventNext: false },
				];

				return (
						<div className={ 'page-wrapper' }>
								<div className={ 'container-fluid' }>
										<div className={ 'row' }>
												<div className={ 'col-12' }>
														<div className={ 'card' }>
																<div className={ 'card-body' }>
																		<StepWizard
																				steps={ steps }
																				sendAction={ () => alert( 'Send' ) }
																				printAction={ () => alert( 'Print' ) }
																		/>
																</div>
														</div>
												</div>
										</div>
								</div>
						</div>
				);
		}
}