import React from 'react';

const StepThree = () => {
		return (
						<section>
								<div className="row">
										<div className="col-md-6">
												<div className="form-group">
														<label htmlFor="wint1">Interview For :</label>
														<input type="text" className="form-control required"
														       id="wint1" />
												</div>
												<div className="form-group">
														<label htmlFor="wintType1">Interview Type :</label>
														<select className="custom-select form-control required"
														        id="wintType1" data-placeholder="Type to search cities"
														        name="wintType1">
																<option value="Banquet">Normal</option>
																<option value="Fund Raiser">Difficult</option>
																<option value="Dinner Party">Hard</option>
														</select>
												</div>
												<div className="form-group">
														<label htmlFor="wLocation1">Location :</label>
														<select className="custom-select form-control required"
														        id="wLocation1" name="wlocation">
																<option value="">Select City</option>
																<option value="India">India</option>
																<option value="USA">USA</option>
																<option value="Dubai">Dubai</option>
														</select>
												</div>
										</div>
										<div className="col-md-6">
												<div className="form-group">
														<label htmlFor="wjobTitle2">Interview Date :</label>
														<input type="date" className="form-control required"
														       id="wjobTitle2" />
												</div>
												<div className="form-group">
														<label>Requirements :</label>
														<div className="m-b-10">
																<label className="custom-control custom-radio">
																		<input id="radio3" name="radio" type="radio"
																		       className="custom-control-input" />
																		<span
																				className="custom-control-label">Employee</span>
																</label>
																<label className="custom-control custom-radio">
																		<input id="radio4" name="radio" type="radio"
																		       className="custom-control-input" />
																		<span
																				className="custom-control-label">Membership</span>
																</label>
														</div>
												</div>
										</div>
								</div>
						</section>
		);
};

export default StepThree;