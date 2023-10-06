import React from 'react';

const Card = ({service}) => {
    return (
       <div className="card w-[370px] h-[319px] rounded-xl hover:shadow-md">
               <figure className=" mx-36 py-8">
                <img src={service.img} alt="" />
               </figure>
             <div className="card-body items-center text-center">
               <h2 className="card-title font-semibold text-[#111430]">{service.name}</h2>
               <h2 className="card-title text-[#F63E7B] font-bold">${service.price}</h2>
               <p className='px-10 py-3 text-[#666666]'>{service.description}</p>
             </div>
        </div>
    );
};

export default Card;