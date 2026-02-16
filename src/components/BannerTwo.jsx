import React, { useState } from 'react';
import Slider from './Slider';
import Header from './Header';

function BannerTwo() {
  const [packages, setPackages] = useState([]);
  return (
    <>
    <header>
      <Header/>
    </header>
      <div className="container-fluid pt-2">
        <div className="row">
          <div className="col-lg-3">
            <Slider />


          </div>
          <div className="col-lg-9">
            <div className="c-2 ">
              <div className="textss">
                <h5>Welcome</h5>
                <h3>Rocky Catala</h3>
              </div>



            </div>
            <br />
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>PRU / COLL / MAN</th>
                  <th>Customer</th>
                  <th>Merchandise / FRUS / Units</th>
                  <th>Description / Weight</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {packages.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center text-muted py-4">
                      Package list is empty please filter and try again...
                    </td>
                  </tr>
                ) : (
                  packages.map((pkg, index) => (
                    <tr key={index}>
                      <td>{pkg.pruCollMan}</td>
                      <td>{pkg.customer}</td>
                      <td>{pkg.merchandise}</td>
                      <td>{pkg.description}</td>
                      <td>{pkg.action}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>


          </div>

        </div>
      </div>

    </>
  )
}

export default BannerTwo