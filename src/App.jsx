import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import MainContent from './MainContent';

function App() {
	return (
		<>
			<Header />
			<Sidebar />
			<MainContent>
				<div className="row">
					<div className="col-lg-6">

						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Example Card</h5>
								<p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
							</div>
						</div>

					</div>

					<div className="col-lg-6">

						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Example Card</h5>
								<p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
							</div>
						</div>

					</div>
				</div>
			</MainContent>
			<Footer />
		</>
	)
}

export default App;
