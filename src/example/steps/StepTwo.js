import React, { Component } from 'react';

class StepTwo extends Component {

		state = {
				company: '',
				company_url: '',
				company_description: '',
		};

		handleChangeInput = ( event ) => {
				this.setState( {
						[event.target.name]: event.target.value,
				} );
		};

		render() {
				return (
						<div>
								<section>
										<div className="row">
												<div className="col-md-6">
														<div className="form-group">
																<label htmlFor="jobTitle2">Company Name :</label>
																<input type="text" className="form-control required"
																       name="company" onChange={ this.handleChangeInput }
																       value={ this.state.company } />
														</div>
												</div>
												<div className="col-md-6">
														<div className="form-group">
																<label htmlFor="webUrl3">Company URL :</label>
																<input type="url" className="form-control required"
																       name="company_url" onChange={ this.handleChangeInput }
																       value={ this.state.company_url } /></div>
												</div>
												<div className="col-md-12">
														<div className="form-group">
																<label htmlFor="shortDescription3">Short Description :</label>
																<textarea name="company_description"
																          rows="6" className="form-control" onChange={ this.handleChangeInput }
																          value={ this.state.company_description } />
														</div>
												</div>
										</div>
								</section>
						</div>
				);
		}
}

export default StepTwo;