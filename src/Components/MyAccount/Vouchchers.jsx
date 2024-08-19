import React from 'react';
import Banner from '../Shared/Banner/Banner';
import { useNavigate } from 'react-router-dom';
import BillingHistory from './BillingHistory';


const Vouchers = () => {
    const navigate = useNavigate();

    const handleClick = (url) => {
        navigate(url)
    }
    return (
        <section>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <div role="tablist" className="tabs border-b border-[#FF5C2C] ">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab text-[#FF5C2C] font-bold border-b border-[#FF5C2C] " aria-label="Billing History" defaultChecked />
                    <div role="tabpanel" className="tab-content p-10 "> 
                        <BillingHistory></BillingHistory> 
                    </div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab text-[#FF5C2C] font-bold border-b border-[#FF5C2C]" aria-label="Billing History"  />
                    <div role="tabpanel" className="tab-content p-10">Tab content 1</div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab text-[#FF5C2C] font-bold border-b border-[#FF5C2C]" aria-label="Billing History"  />
                    <div role="tabpanel" className="tab-content p-10">Tab content 1</div>
                </div>
            </div>

        </section>
    );
};

export default Vouchers;