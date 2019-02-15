import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css/navbar.css';
import { getNavStyles } from './Helper';
import { Navbar } from './Navbar';
import { Button } from './Button';

export default class StepWizard extends Component {

		state = {
				currentStep: 0,
				finish: false,
		};

		navBarOnClick = ( event ) => {
				const length = this.props.steps.length;
				if ( event.currentTarget.value === length - 1 && this.state.component === length - 1 ) {
						this._goToStep( length );
				} else {
						this._goToStep( event.currentTarget.value );
				}
		};

		nextButton = ( event ) => {
				event.preventDefault();
				this._nextOnNavBar();
		};

		previousButton = ( event ) => {
				event.preventDefault();
				this._previousOnNavBar();
		};

		sendButton = ( event ) => {
				event.preventDefault();
				this.setState( { finish: true, modal: true } );
				return this.props.sendAction();
		};

		printButton = ( event ) => {
				event.preventDefault();
				return this.props.printAction();
		};

		render() {

				const { steps, navigationBtn, sendBtn, printBtn } = this.props;
				const currentComponent = this._instanceComponent( steps );
				const renderSteps = () => {
						const currentStep = this.state.finish ? this.state.currentStep + 1 : this.state.currentStep;
						const styles = getNavStyles( currentStep, steps.length );
						return steps.map( ( component, index ) => (
								<Navbar
										styles={ styles }
										key={ index }
										component={ component }
										handle={ this.navBarOnClick }
										index={ index }
								/>
						) );
				};

				return (
						<div className='container'>
								<ol className='navbarProgress'>
										{ !this.state.finish ? renderSteps() : null }
								</ol>
								{ currentComponent }
								<div>

										<form>
												{ this.state.currentStep > 0 && !this.state.finish ?
												  <Button
														  cls={ navigationBtn.cls }
														  position={ navigationBtn.positionPrev }
														  title={ navigationBtn.titlePrev }
														  handle={ this.previousButton } /> : null }

												{ this.state.currentStep < steps.length - 1 ?
												  <Button
														  cls={ navigationBtn.cls }
														  position={ navigationBtn.positionNext }
														  title={ navigationBtn.titleNext }
														  handle={ this.nextButton } /> : null }

												{ this.state.currentStep === steps.length - 1 && !this.state.finish ?
												  <Button
														  cls={ sendBtn.cls }
														  position={ sendBtn.position }
														  title={ sendBtn.title }
														  handle={ this.sendButton } /> : null }

												{ this.state.finish && printBtn.enable ?
												  <Button
														  cls={ printBtn.cls }
														  position={ printBtn.position }
														  title={ printBtn.title }
														  handle={ this.printButton } /> : null }
										</form>
								</div>
						</div>
				);
		}

		_instanceComponent( steps ) {
				return steps[this.state.currentStep].component;
		}

		_previousOnNavBar = () => {
				const current = this.state.currentStep > 0 ? this.state.currentStep - 1 : this.state.currentStep;
				this.setState( {
						currentStep: current,
						finish: false,
				} );

				return current;
		};

		_goToStep = ( component ) => {
				this.setState( {
						currentStep: component,
						finish: false,
				} );

				return component;
		};

		_nextOnNavBar = () => {
				const current = this.props.steps.length > this.state.currentStep ? this.state.currentStep + 1
				                                                                 : this.state.currentStep;
				this.setState( {
						currentStep: current,
						finish: false,
				} );

				return current;
		};
}

StepWizard.propTypes = {
		steps: PropTypes.array.isRequired,
		navigationBtn: PropTypes.shape( {
				cls: PropTypes.string,
				positionPrev: PropTypes.string,
				positionNext: PropTypes.string,
				titlePrev: PropTypes.string,
				titleNext: PropTypes.string,
		} ),
		sendBtn: PropTypes.shape( {
				cls: PropTypes.string,
				title: PropTypes.string,
				position: PropTypes.string,
		} ),
		printBtn: PropTypes.shape( {
				enable: PropTypes.bool,
				cls: PropTypes.string,
				position: PropTypes.string,
				title: PropTypes.string,
		} )
};

StepWizard.defaultProps = {
		steps: [],
		navigationBtn: {
				cls: 'btn btn-info',
				positionPrev: 'float-left',
				positionNext: 'float-right',
				titlePrev: 'Previous',
				titleNext: 'Next',
		},
		sendBtn: {
				cls: 'btn btn-danger',
				title: 'Send',
				position: 'float-right',
		},
		printBtn: {
				enable: true,
				cls: 'btn btn-primary',
				position: 'float-right',
				title: 'Print Resume',
		},
		sendAction: () => {alert( 'Form Send' );},
		printAction: () => {alert( 'Form Print' );},
};