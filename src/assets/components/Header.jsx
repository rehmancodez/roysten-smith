
import logo2 from "../images/logo-h.png"
function Header() {
    return (
        <>

            <header className="mt-3 mx-2 pb-2">
                <div className="container-fluid header ">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={logo2}></img>

                        </div>
                        <div className="col-lg-6">
                            <div className="c-0">
                                <p className="mt-3">Ship jet courier</p>
                                <p className="mt-3">Ship jet courier</p>
                                <button type="button" class="btn btn-outline-light">Settings</button>
                                <button type="button" class="btn btn-outline-light">Logout</button>
                            </div>
                        </div>
                    </div>
                </div>

            </header>

        </>
    )
}
export default Header;