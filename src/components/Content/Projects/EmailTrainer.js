const EmailTrainer = () => {
  return(			<section className = "project-item">
				<div className="container">
					<img className = "project-pic" src={require("../../../images/e-mail-user-interface.png")} alt="E-mail Training System" width = "600px" height = "auto" />
					<div className="overlay">
						<div className="text">E-mail Training System</div>
					</div>
				</div>
				<section className = "project-info">
					<h3>E-mail Training System</h3>
					<h4>HTML, CSS, Javascript, also utilizing MongoDB</h4>   
					<p>
						As part of a community driven project during my studies at Saint Mary's, I worked with fellow 
						classmates to design an e-mail training system for a local community organization called Autism NS.
					</p>
					<p>
						The system was developed to help their clients learn how to use and get comfortable with 
						e-mail systems. The system is private and runs on a server where a client is able to send 
						simulated e-mails back and forth with their advisor.
					</p>
					<p>
						My main contribution to the project was designing and implementing the user interface 
						with CSS and HTML, but I also contributed to the Javascript implementation.
					</p>
					<p> More details and screen shots can be found by clicking "view project" below.</p>
					<br />					
					<div className="box-project">
						<div className="btn-2 btn-project" onClick={()=>window.location.href='../../../../pages/e-mail-training.html'} style={{ cursor: "pointer" }}>
							<span className="btn-text">view project</span>
						</div>		
					</div>
				</section>
			</section>);
};

export default EmailTrainer;