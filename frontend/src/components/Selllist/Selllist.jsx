import React from 'react';
import './Selllist.css';
import test from '../../assets/image.svg'
import moreArraw from '../../assets/morearrow.svg'
import { useNavigate } from 'react-router-dom';
function Selllist() {
    const navigate = useNavigate()
  const handleForm =()=>{
    navigate('/post/attributes')
  }

  const categories = [
    { name: 'Cars', icon: test ,arrow:moreArraw},
    { name: 'Properties', icon: test,arrow:moreArraw },
    { name: 'Mobiles', icon: test,arrow:moreArraw },
    { name: 'Jobs', icon: test,arrow:moreArraw },
    { name: 'Bikes', icon: test,arrow:moreArraw },
    { name: 'Electronics & Appliances', icon: test,arrow:moreArraw },
    { name: 'Commercial Vehicles & Spares', icon: test,arrow:moreArraw },
    { name: 'Furniture', icon: test,arrow:moreArraw },
    { name: 'Fashion', icon: test,arrow:moreArraw },
    { name: 'Books,Sports & Hobbies', icon: test,arrow:moreArraw },
    { name: 'Pets', icon: test,arrow:moreArraw },
    { name: 'Services', icon: test,arrow:moreArraw },
  ];
  return (
    <div className="list">
      <div className="heading">
        <h2>POST YOUR AD</h2>
      </div>
      <div className="container">
        <div className="left-container">
          <div className="subheading">
            <h3>Choose a category</h3>
          </div>
            <div className="categories">
            {categories.map((category, index) => (
              <div className="onelist" key={index}>
                <img src={category.icon} alt={`${category.name} icon`} />
                <p>{category.name}</p>
                <img src={category.arrow} alt="More Arrow" />
              </div>
            ))}
               
               
                
                
            </div>
        </div>
        <div className="right-container">
        <div className="secondList">
                
                   <p onClick={handleForm}>cars</p>
                  
         </div>
        </div>
      </div>
    </div>
  );
}

export default Selllist;
