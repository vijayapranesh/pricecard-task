import React from 'react'
import "./card.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCheck , FaTimes} from "react-icons/fa";



const Card = () => {
  return (
    <div>
        <section class="pricing py-5">
        <div class="container">
            <div class="row">
            
            <div class="col-lg-4">
                <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
                    <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
                    <hr></hr>
                    <ul>
                    <li><span><FaCheck/></span> Single User</li>
                    <li><span><FaCheck/></span> 5GB Storage</li>
                    <li><span><FaCheck/></span> Unlimited Public Projects</li>
                    <li><span><FaCheck/></span> Community Access</li>
                    <li class="text-muted"><span><FaTimes/></span> Unlimited
                        Private Projects</li>
                    <li class="text-muted"><span><FaTimes/></span> Dedicated
                        Phone Support</li>
                    <li class="text-muted"><span><FaTimes/></span> Free Subdomain
                    </li>
                    <li class="text-muted"><span><FaTimes/></span> Monthly Status
                        Reports</li>
                    </ul>
                    <div class="d-grid">
                    <a href="#" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
                    <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
                    <hr></hr>
                    <ul class="fa-ul">
                    <li><span><FaCheck/></span> 5 Users</li>
                    <li><span><FaCheck/></span> 50GB Storage</li>
                    <li><span><FaCheck/></span> Unlimited Public Projects</li>
                    <li><span><FaCheck/></span> Community Access</li>
                    <li><span><FaCheck/></span> Unlimited Private Projects</li>
                    <li><span><FaCheck/></span> Dedicated Phone Support</li>
                    <li><span><FaCheck/></span> Free Subdomain</li>
                    <li class="text-muted"><span><FaTimes/></span> Monthly Status Reports</li>
                    </ul>
                    <div class="d-grid">
                    <a href="#" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
                </div>
            </div>
            
            <div class="col-lg-4">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
                    <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
                    <hr></hr>
                    <ul class="fa-ul">
                    <li><span class="fa-li"><FaCheck/></span> Unlimited Users
                    </li>
                    <li><span><FaCheck/></span> 150GB Storage</li>
                    <li><span><FaCheck/></span> Unlimited Public Projects</li>
                    <li><span><FaCheck/></span> Community Access</li>
                    <li><span><FaCheck/></span> Unlimited Private Projects</li>
                    <li><span><FaCheck/></span> Dedicated Phone Support</li>
                    <li><span><FaCheck/></span> Unlimited Free Subdomains</li>
                    <li><span><FaCheck/></span> Monthly Status Reports</li>
                    </ul>
                    <div class="d-grid">
                    <a href="#" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Card