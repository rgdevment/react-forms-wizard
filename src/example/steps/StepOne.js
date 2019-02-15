import React from 'react';

const StepOne = () => {

		return (
				<section>
						<div className="row">
								<div className="col-md-6">
										<div className="form-group">
												<label htmlFor="wfirstName2"> First Name :
														<span className="danger">*</span>
												</label>
												<input type="text" className="form-control required"
												       id="wfirstName2" name="firstName" required /></div>
								</div>
								<div className="col-md-6">
										<div className="form-group">
												<label htmlFor="wlastName2"> Last Name :
														<span className="danger">*</span>
												</label>
												<input type="text" className="form-control required"
												       id="wlastName2" name="lastName" /></div>
								</div>
						</div>
						<div className="row">
								<div className="col-md-6">
										<div className="form-group">
												<label htmlFor="wemailAddress2"> Email Address :
														<span className="danger">*</span>
												</label>
												<input type="email" className="form-control required"
												       id="wemailAddress2" name="emailAddress" /></div>
								</div>
								<div className="col-md-6">
										<div className="form-group">
												<label htmlFor="wphoneNumber2">Phone Number :</label>
												<input type="tel" className="form-control" id="wphoneNumber2" />
										</div>
								</div>
						</div>
						<div className="row">
								<div className="col-md-6">
										<div className="form-group">
												<label htmlFor="wlocation2"> Select City :
														<span className="danger">*</span>
												</label>
												<select className="custom-select form-control required"
												        id="wlocation2" name="location">
														<option value="">Select City</option>
														<option value="India">India</option>
														<option value="USA">USA</option>
														<option value="Dubai">Dubai</option>
												</select>
										</div>
								</div>
								<div className="col-md-6">
										<div className="form-group">
												<label htmlFor="wdate2">Date of Birth :</label>
												<input type="date" className="form-control" id="wdate2" /></div>
								</div>
						</div>
				</section>
		);
};

export default StepOne;