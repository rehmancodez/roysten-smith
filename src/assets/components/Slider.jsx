import { Link } from "react-router-dom";


function Slider() {
    return (
        <>

            <div className="">
                <div className="board">
                    <div>
                        <p>Shipping</p>
                        <div className="c-1 ">
                            <i class="fa-solid fa-house"></i>
                            <h5 className="mt-2">
                                <Link to={"/dashboard"}>Home</Link>
                            </h5>


                        </div>
                        <div className="c-1 mt-1">
                            <i class="fa-solid fa-house"></i>
                            <h5 className="mt-2">
                                <Link to={"/collection"}>Collection</Link>
                            </h5>


                        </div>
                        <div className="c-1 mt-1">
                            <i class="fa-solid fa-house"></i>
                            <h5 className="mt-2">
                                <Link to={"/Menifest"}>Menifiest</Link>
                            </h5>


                        </div>
                        <div className="c-1 mt-1">
                            <i class="fa-solid fa-house"></i>
                            <h5 className="mt-2">
                                <Link to={"/dashboard"}>Unkowns</Link>
                            </h5>


                        </div>
                        <div className="c-1 mt-1">
                            <i class="fa-solid fa-house"></i>
                            <h5 className="mt-2">
                                <Link to={"/dashboard"}>Reports</Link>
                            </h5>


                        </div>

                    </div>

                </div>
                <div className="admin">
                    <div>
                        <p>Admin</p>
                        <div className="c-admin ">
                            <i class="fa-solid fa-house"></i>
                            <h5 className="mt-2">Account</h5>


                        </div>
                        <div className="c-admin mt-1">
                            <i class="fa-solid fa-house"></i>
                            <h5 className="mt-2">Courier</h5>


                        </div>
                        <div className="c-admin mt-1">
                            <i class="fa-solid fa-house"></i>
                              <h5 className="mt-2">Billing</h5>


                        </div>
                        <div className="c-admin mt-1">
                            <i class="fa-solid fa-house"></i>
                            <h5 className="mt-2">Consignees</h5>


                        </div>
                         <div className="c-admin mt-1">
                            <i class="fa-solid fa-house"></i>
                            <h5 className="mt-2">Consignees</h5>


                        </div>
                 
                    </div>

                </div>



            </div>

        </>
    )
}
export default Slider;