function MainContent(props) {
	return (
		<>
			<main id="main" className="main">

				<div className="pagetitle">
					<h1>Blank Page</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><a href="index.html">Home</a></li>
							<li className="breadcrumb-item">Pages</li>
							<li className="breadcrumb-item active">Blank</li>
						</ol>
					</nav>
				</div>

				<section className="section">
					{props.children}
				</section>

			</main>
		</>
	);
}

export default MainContent;