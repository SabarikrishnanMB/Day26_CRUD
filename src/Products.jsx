import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Products</h1>
        <Link
          to="/portal/createproduct"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create Product
        </Link>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Product Details</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Model Name</th>
                  <th>Processor</th>
                  <th>Memory</th>
                  <th>OS</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
              <tr>
                  <th>Brand</th>
                  <th>Model Name</th>
                  <th>Processor</th>
                  <th>Memory</th>
                  <th>OS</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </tfoot>
        
              <tbody>
                <tr>
                  <td>Apple</td>
                  <td>iPhone 13 Pro</td>
                  <td>Apple A15 Bionic(5 nm)</td>
                  <td>512GB 6GB RAM</td>
                  <td>iOS 15</td>
                  <td>1,29,999</td>
                  <td>
                  <button className="btn btn-sm btn-warning mr-2"> View</button>
                  <button className="btn btn-sm btn-primary mr-2"> Edit</button>
                  <button className="btn btn-sm btn-danger mr-2"> Delete</button>
                      
                  </td>
                </tr>
                <tr>
                  <td>Samsung</td>
                  <td>Samsung Galaxy S22 Ultra 5G</td>
                  <td>Qualcomm Snapdragon 8 Gen 1</td>
                  <td>512GB 12GB RAM</td>
                  <td>Android 12, One UI 4.1</td>
                  <td>1,15,000</td>
                  <td>
                  <button className="btn btn-sm btn-warning mr-2"> View</button>
                  <button className="btn btn-sm btn-primary mr-2"> Edit</button>
                  <button className="btn btn-sm btn-danger mr-2"> Delete</button>                      
                  </td>
                </tr>
                <tr>
                  <td>Sony</td>
                  <td>Sony Xperia XA2 Plus</td>
                  <td>Qualcomm Snapdragon 630</td>
                  <td>64GB 6GB RAM</td>
                  <td>Android 8.0 (Oreo)</td>
                  <td>70,000</td>
                  <td>
                  <button className="btn btn-sm btn-warning mr-2"> View</button>
                  <button className="btn btn-sm btn-primary mr-2"> Edit</button>
                  <button className="btn btn-sm btn-danger mr-2"> Delete</button>                      
                  </td>
                </tr>
                <tr>
                  <td>Motorola</td>
                  <td>Motorola Moto Razr 2022</td>
                  <td>Qualcomm Snapdragon 8+ Gen 1 (4 nm)</td>
                  <td>512GB 12GB RAM</td>
                  <td>Android 12, MYUI 4.0</td>
                  <td>80,000</td>
                  <td>
                  <button className="btn btn-sm btn-warning mr-2"> View</button>
                  <button className="btn btn-sm btn-primary mr-2"> Edit</button>
                  <button className="btn btn-sm btn-danger mr-2"> Delete</button>                      
                  </td>
                </tr>
                <tr>
                  <td>OnePlus</td>
                  <td>OnePlus 10T</td>
                  <td>Qualcomm Snapdragon 8+ Gen 1 (4 nm)</td>
                  <td>256GB 16GB RAM</td>
                  <td>Android 12, OxygenOS 12.1</td>
                  <td>55,000</td>
                  <td>
                  <button className="btn btn-sm btn-warning mr-2"> View</button>
                  <button className="btn btn-sm btn-primary mr-2"> Edit</button>
                  <button className="btn btn-sm btn-danger mr-2"> Delete</button>                      
                  </td>
                </tr>
                <tr>
                  <td>Realme</td>
                  <td>Realme GT2 Explorer Master</td>
                  <td>Qualcomm Snapdragon 8+ Gen 1 (4 nm)</td>
                  <td>256GB 12GB RAM</td>
                  <td>Android 12, Realme UI 3.0</td>
                  <td>65,000</td>
                  <td>
                  <button className="btn btn-sm btn-warning mr-2"> View</button>
                  <button className="btn btn-sm btn-primary mr-2"> Edit</button>
                  <button className="btn btn-sm btn-danger mr-2"> Delete</button>                      
                  </td>
                </tr>
                <tr>
                  <td>Redmi</td>
                  <td>Xiaomi Redmi K50 Ultra</td>
                  <td>Qualcomm Snapdragon 8+ Gen 1</td>
                  <td>512GB 12GB RAM</td>
                  <td>Android 12, MIUI 13</td>
                  <td>40,000</td>
                  <td>
                  <button className="btn btn-sm btn-warning mr-2"> View</button>
                  <button className="btn btn-sm btn-primary mr-2"> Edit</button>
                  <button className="btn btn-sm btn-danger mr-2"> Delete</button>                      
                  </td>
                </tr>
                <tr>
                  <td>Vivo</td>
                  <td>vivo V25 Pro</td>
                  <td>MediaTek Dimensity 1300 (6 nm)</td>
                  <td>256GB 12GB RAM</td>
                  <td>Android 12, Funtouch 12</td>
                  <td>40,000</td>
                  <td>
                  <button className="btn btn-sm btn-warning mr-2"> View</button>
                  <button className="btn btn-sm btn-primary mr-2"> Edit</button>
                  <button className="btn btn-sm btn-danger mr-2"> Delete</button>                      
                  </td>
                </tr>
                <tr>
                  <td>Nothing</td>
                  <td>Nothing Phone (1)</td>
                  <td>Qualcomm Snapdragon 778G+ 5G (6 nm)</td>
                  <td>256GB 12GB RAM</td>
                  <td>Android 12, Nothing OS 1.1.3</td>
                  <td>35,000</td>
                  <td>
                  <button className="btn btn-sm btn-warning mr-2"> View</button>
                  <button className="btn btn-sm btn-primary mr-2"> Edit</button>
                  <button className="btn btn-sm btn-danger mr-2"> Delete</button>                      
                  </td>
                </tr>
                <tr>
                  <td>Oppo</td>
                  <td>Oppo Reno8 Pro</td>
                  <td>MediaTek Dimensity 8100-Max (5 nm)</td>
                  <td>256GB 12GB RAM</td>
                  <td>Android 12, ColorOS 12.1</td>
                  <td>45,000</td>
                  <td>
                  <button className="btn btn-sm btn-warning mr-2"> View</button>
                  <button className="btn btn-sm btn-primary mr-2"> Edit</button>
                  <button className="btn btn-sm btn-danger mr-2"> Delete</button>                      
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
