import React from 'react';

const StepFour = props => {
		return (
				<section>
						<div className="row">
								<div className="col-md-6">
										<div className="form-group">
												<label htmlFor="behName1">Behaviour :</label>
												<input type="text" className="form-control required"
												       id="behName1" />
										</div>
										<div className="form-group">
												<label htmlFor="participants1">Confidance</label>
												<input type="text" className="form-control required"
												       id="participants1" />
										</div>
										<div className="form-group">
												<label htmlFor="participants1">Result</label>
												<select className="custom-select form-control required"
												        id="participants1" name="location">
														<option value="">Select Result</option>
														<option value="Selected">Selected</option>
														<option value="Rejected">Rejected</option>
														<option value="Call Second-time">Call Second-time</option>
												</select>
										</div>
								</div>
								<div className="col-md-6">
										<div className="form-group">
												<label htmlFor="decisions1">Comments</label>
												<textarea name="decisions" id="decisions1" rows="4"
												          className="form-control" />
										</div>
										<div className="form-group">
												<label>Rate Interviwer :</label>
												<div className="c-inputs-stacked">
														<label
																className="inline custom-control custom-checkbox block">
																<input type="checkbox"
																       className="custom-control-input" />
																<span
																		className="custom-control-label ml-0">1 star</span>
														</label>
														<label
																className="inline custom-control custom-checkbox block">
																<input type="checkbox"
																       className="custom-control-input" />
																<span
																		className="custom-control-label ml-0">2 star</span>
														</label>
														<label
																className="inline custom-control custom-checkbox block">
																<input type="checkbox"
																       className="custom-control-input" />
																<span
																		className="custom-control-label ml-0">3 star</span>
														</label>
														<label
																className="inline custom-control custom-checkbox block">
																<input type="checkbox"
																       className="custom-control-input" />
																<span
																		className="custom-control-label ml-0">4 star</span>
														</label>
														<label
																className="inline custom-control custom-checkbox block">
																<input type="checkbox"
																       className="custom-control-input" />
																<span
																		className="custom-control-label ml-0">5 star</span>
														</label>
												</div>
										</div>
								</div>
						</div>
				</section>
		);
};

export default StepFour;