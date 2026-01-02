import logo2 from "../images/logo-h.png"
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';






function Banner() {
    const data = [
        { name: 'Feb. 25', value: 56800 },
        { name: 'Feb. 26', value: 56400 },
        { name: 'Feb. 27', value: 58200 },
        { name: 'Feb. 28', value: 56600 },
        { name: 'Mar. 1', value: 60400 },
        { name: 'Mar. 2', value: 58200 },
        { name: 'Mar. 3', value: 58800 },
        { name: 'Mar. 4', value: 59200 },
        { name: 'Mar. 5', value: 58600 },
        { name: 'Mar. 6', value: 59000 }
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = 5;

    const packages = [
        { id: 1, packageName: 'Lorem Ipsum here', customer: 'Lorem Ipsum here', perceivedValue: 'Lorem Ipsum here', description: 'Lorem Ipsum is simply a dummy text here' },
        { id: 2, packageName: 'Lorem Ipsum here', customer: 'Lorem Ipsum here', perceivedValue: 'Lorem Ipsum here', description: 'Lorem Ipsum is simply a dummy text here' },
        { id: 3, packageName: 'Lorem Ipsum here', customer: 'Lorem Ipsum here', perceivedValue: 'Lorem Ipsum here', description: 'Lorem Ipsum is simply a dummy text here' },
        { id: 4, packageName: 'Lorem Ipsum here', customer: 'Lorem Ipsum here', perceivedValue: 'Lorem Ipsum here', description: 'Lorem Ipsum is simply a dummy text here' },
        { id: 5, packageName: 'Lorem Ipsum here', customer: 'Lorem Ipsum here', perceivedValue: 'Lorem Ipsum here', description: 'Lorem Ipsum is simply a dummy text here' },
    ];

    return (
        <>

            <div className="container-fluid Header">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={logo2}></img>

                    </div>
                    <div className="col-lg-6">
                        <div className="c-0">
                            <p className="mt-3">Ship jet courier</p>
                            <p className="mt-3">Ship jet courier</p>
                            <button type="button" class="btn btn-outline-light">Light</button>
                            <button type="button" class="btn btn-outline-light">Light</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-2">
                <div className="row">
                    <div className="col-lg-3 ">
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
                                    <Link to={"/dashboard"}>Menifiest</Link>
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
                                    <h5 className="mt-2">Home</h5>


                                </div>
                                <div className="c-admin mt-1">
                                    <i class="fa-solid fa-house"></i>
                                    <h5 className="mt-2">Home</h5>


                                </div>
                                <div className="c-admin mt-1">
                                    <i class="fa-solid fa-house"></i>
                                    <h5 className="mt-2">Home</h5>


                                </div>
                                <div className="c-admin mt-1">
                                    <i class="fa-solid fa-house"></i>
                                    <h5 className="mt-2">Home</h5>


                                </div>
                                <div className="c-admin mt-1">
                                    <i class="fa-solid fa-house"></i>
                                    <h5 className="mt-2">Home</h5>


                                </div>
                                <div className="c-admin mt-1">
                                    <i class="fa-solid fa-house"></i>
                                    <h5 className="mt-2">Home</h5>


                                </div>
                            </div>

                        </div>



                    </div>
                    <div className="col-lg-9">
                        <div className="c-2">
                            <div className="textss">
                                <h5>Welcome</h5>
                                <h3>Rocky Catala</h3>
                            </div>



                        </div>
                        <div className="container-fluid pt-4 pb-4">
                            <h3>Statistics</h3>
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="stats">
                                        <div className="circle">
                                            .

                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-3">
                                    <div className="stats2">
                                        <div className="circle2">
                                            .

                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-3">
                                    <div className="stats">
                                        <div className="circle">
                                            .

                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-3">
                                    <div className="stats2">
                                        <div className="circle2">
                                            .

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-white p-8">
                            <h2 className="text-lg font-semibold mb-4">Graph Chart</h2>
                            <div style={{ width: '100%', height: '400px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart
                                        data={data}
                                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                                    >
                                        <defs>
                                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#FDB022" stopOpacity={0.8} />
                                                <stop offset="95%" stopColor="#FDB022" stopOpacity={0.1} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="0" stroke="#f0f0f0" vertical={false} />
                                        <XAxis
                                            dataKey="name"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#999', fontSize: 12 }}
                                        />
                                        <YAxis
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#999', fontSize: 12 }}
                                            domain={[52000, 62000]}
                                            ticks={[52000, 54000, 56000, 58000, 60000, 62000]}
                                        />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: '#fff',
                                                border: '1px solid #ddd',
                                                borderRadius: '4px'
                                            }}
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="value"
                                            stroke="#FDB022"
                                            strokeWidth={2}
                                            fillOpacity={1}
                                            fill="url(#colorValue)"
                                            dot={{ fill: '#000', strokeWidth: 2, r: 4 }}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                            <div className="container-fluid bg-white p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h2 className="h4 fw-semibold text-dark mb-1">Package Management</h2>
          <p className="small text-muted mb-0">View/Manage all 0 Packages Weighing 0 Lb(s) | 0 KG(s)</p>
        </div>
        <button className="btn btn-warning fw-medium d-flex align-items-center gap-2">
          <span>▼</span>
          Toggle Filter
        </button>
      </div>

      {/* Table */}
      <div className="table-responsive border rounded">
        <table className="table table-hover mb-0">
          <thead className="">
            <tr>
              <th className="py-3 px-3 bg-dark text-white ">PKG/ COLL/ MAN</th>
              <th className="py-3 px-1 bg-dark text-white">Customer</th>
              <th className="py-3 px-1 bg-dark text-white">Merchant/ YDK#/ Date</th>
              <th className="py-3 px-1 bg-dark text-white"></th>
              <th className="py-3 px-1 bg-dark text-white">Description/ Weight</th>
              <th className="py-3 px-1 bg-dark text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg.id}>
                <td className="py-3 px-1">{pkg.packageName}</td>
                <td className="py-3">{pkg.customer}</td>
            
                <td className="py-3 px-1">{pkg.customer}</td>
                <td className="py-3 px-1">{pkg.merchant}</td>
                
                
                <td className="py-3 text-primary">{pkg.description}</td>
                <td className="py-3">
                  <div className="d-flex gap-2">
                    <button className="btn btn-warning rounded-circle p-0" style={{ width: '32px', height: '32px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                      </svg>
                    </button>
                    <button className="btn btn-danger rounded-circle p-0" style={{ width: '32px', height: '32px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18"/>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <p className="small text-muted mb-0">Page 1 of 1 [5 Items]</p>
        <div className="d-flex gap-2">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="btn btn-light border"
            style={{ width: '32px', height: '32px', padding: '0' }}
          >
            &lt;
          </button>
          <button 
            className="btn btn-dark"
            style={{ width: '32px', height: '32px', padding: '0' }}
          >
            1
          </button>
          <button 
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="btn btn-light border"
            style={{ width: '32px', height: '32px', padding: '0' }}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>



                    </div>
                </div>

            </div>
        </>
    )
}
export default Banner;